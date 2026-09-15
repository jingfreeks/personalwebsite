#!/usr/bin/env node
/**
 * SEO smoke test. Runs against a live URL (default: a local `next start` on
 * port 3100 which this script boots from the production build).
 *
 *   npm run seo:check                 # build must exist (.next); starts next start
 *   npm run seo:check -- https://…    # audit a deployed site
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const target = process.argv[2];
const PORT = 3100;
const base = (target ?? `http://localhost:${PORT}`).replace(/\/$/, "");
const failures = [];
const warnings = [];
const fail = (m) => failures.push(m);
const warn = (m) => warnings.push(m);

let server;
async function boot() {
  if (target) return;
  server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], { stdio: "ignore" });
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(base + "/")).ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error("next start did not come up on port " + PORT);
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, "i"))?.[1];
const tags = (html, re) => [...html.matchAll(re)].map((m) => m[0]);
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');

async function auditPage(path, { expectIndex = true } = {}) {
  const res = await fetch(base + path);
  if (!res.ok) return fail(`${path}: HTTP ${res.status}`);
  const html = await res.text();
  const p = (m) => `${path}: ${m}`;

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (!title) fail(p("missing <title>"));
  else if (title.length > 60) warn(p(`title is ${title.length} chars (>60 may be truncated in results)`));

  const metas = tags(html, /<meta\s[^>]*>/g);
  const meta = (name, key = "name") => decode(metas.map((t) => (attr(t, key) === name ? attr(t, "content") : null)).find(Boolean) ?? "");
  const desc = meta("description");
  if (!desc) fail(p("missing meta description"));
  else if (desc.length < 50 || desc.length > 160) warn(p(`meta description is ${desc.length} chars (aim for 50–160)`));

  const canonical = tags(html, /<link\s[^>]*rel=["']canonical["'][^>]*>/g).map((t) => attr(t, "href"))[0];
  if (!canonical) fail(p("missing canonical link"));
  else if (!/^https?:\/\//.test(canonical)) fail(p(`canonical is not absolute: ${canonical}`));

  const robots = meta("robots");
  if (expectIndex && /noindex/.test(robots)) fail(p("page is noindex but is expected to be indexable"));
  if (!expectIndex && !/noindex/.test(robots)) warn(p("expected noindex on this page"));

  if (!/<html[^>]*\slang=/.test(html)) fail(p("<html> has no lang attribute"));

  for (const k of ["og:title", "og:description", "og:image", "og:url", "og:type"]) {
    if (!meta(k, "property")) fail(p(`missing ${k}`));
  }
  const ogImage = meta("og:image", "property");
  if (ogImage) {
    const r = await fetch(ogImage.startsWith("http") ? ogImage : base + ogImage, { method: "GET" });
    if (!r.ok) fail(p(`og:image returns HTTP ${r.status}`));
    else if (!/^image\//.test(r.headers.get("content-type") ?? "")) fail(p("og:image is not an image"));
  }
  if (!meta("twitter:card")) warn(p("missing twitter:card"));

  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) fail(p(`expected exactly one <h1>, found ${h1s}`));

  const imgs = tags(html, /<img\s[^>]*>/g);
  const noAlt = imgs.filter((t) => !/\salt=/.test(t)).length;
  if (noAlt) fail(p(`${noAlt} <img> tag(s) without alt attribute`));

  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(block[1]);
      if (!data["@context"]) fail(p("JSON-LD block has no @context"));
    } catch (e) {
      fail(p(`invalid JSON-LD: ${e.message}`));
    }
  }
  if (expectIndex && !/application\/ld\+json/.test(html)) warn(p("no JSON-LD structured data"));

  // internal links must resolve
  const hrefs = new Set(
    tags(html, /<a\s[^>]*>/g)
      .map((t) => attr(t, "href"))
      .filter((h) => h && (h.startsWith("/") || h.startsWith(base)) && !h.startsWith("//"))
      .map((h) => h.replace(base, "").split("#")[0])
      .filter((h) => h && !h.startsWith("mailto:")),
  );
  for (const h of hrefs) {
    const r = await fetch(base + h, { method: "HEAD" });
    if (!r.ok) fail(p(`internal link ${h} returns HTTP ${r.status}`));
  }
  const hashes = tags(html, /<a\s[^>]*>/g)
    .map((t) => attr(t, "href"))
    .filter((h) => h && h.startsWith("#") && h.length > 1);
  for (const h of new Set(hashes)) {
    if (!new RegExp(`\\sid=["']${h.slice(1)}["']`).test(html)) fail(p(`anchor ${h} has no matching id on the page`));
  }
  return { title, desc };
}

async function auditSitemapAndRobots() {
  const robots = await fetch(base + "/robots.txt");
  if (!robots.ok) return fail("robots.txt: HTTP " + robots.status);
  const rtxt = await robots.text();
  const sitemapUrl = rtxt.match(/Sitemap:\s*(\S+)/i)?.[1];
  if (!sitemapUrl) fail("robots.txt does not declare a Sitemap");
  if (/^Disallow:\s*\/\s*$/m.test(rtxt)) fail("robots.txt disallows the whole site");

  const sm = await fetch(base + "/sitemap.xml");
  if (!sm.ok) return fail("sitemap.xml: HTTP " + sm.status);
  const xml = await sm.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!locs.length) fail("sitemap.xml lists no URLs");
  for (const loc of locs) {
    const path = loc.replace(/^https?:\/\/[^/]+/, "") || "/";
    const r = await fetch(base + path, { method: "HEAD" });
    if (!r.ok) fail(`sitemap URL ${loc} returns HTTP ${r.status}`);
  }
  return locs;
}

try {
  await boot();
  console.log(`SEO check against ${base}\n`);
  const home = await auditPage("/");
  const locs = (await auditSitemapAndRobots()) ?? [];
  // every indexable page in the sitemap gets the full on-page audit, and titles/descriptions must be unique
  const seen = { title: new Map(), desc: new Map() };
  if (home) { seen.title.set(home.title, "/"); seen.desc.set(home.desc, "/"); }
  for (const loc of locs) {
    const path = loc.replace(/^https?:\/\/[^/]+/, "") || "/";
    if (path === "/") continue;
    const r = await auditPage(path);
    if (!r) continue;
    for (const k of ["title", "desc"]) {
      if (seen[k].has(r[k])) fail(`${path}: duplicate ${k === "desc" ? "meta description" : "title"} (same as ${seen[k].get(r[k])})`);
      seen[k].set(r[k], path);
    }
  }
  if (!locs.some((l) => l.replace(/\/$/, "").endsWith("/blog"))) await auditPage("/blog", { expectIndex: false });
  const nf = await fetch(base + "/this-page-does-not-exist");
  if (nf.status !== 404) fail(`unknown URL returns HTTP ${nf.status} instead of 404`);
  if (home) console.log(`  title: ${home.title}\n  description (${home.desc.length}): ${home.desc}\n  sitemap: ${locs.length} URL(s), all audited\n`);
} catch (e) {
  fail(e.message);
} finally {
  server?.kill();
}

for (const w of warnings) console.log("  ⚠ " + w);
for (const f of failures) console.log("  ✖ " + f);
console.log(failures.length ? `\n${failures.length} SEO failure(s)` : `\nSEO check passed (${warnings.length} warning(s))`);
process.exit(failures.length ? 1 : 0);
