// Blog content model. Articles are structured as typed blocks (not raw HTML
// or markdown) so headings, lists, tables and internal links render with the
// site's existing typography and can be added to without new plumbing.

export type BlogCategory = { slug: string; name: string; description: string };

export const blogCategories: BlogCategory[] = [
  { slug: "react", name: "React", description: "Performance, architecture and best practices for React applications." },
  { slug: "react-native", name: "React Native", description: "Mobile app architecture, FlatList performance and shipping to the stores." },
  { slug: "business-software", name: "Business Software", description: "Building POS, inventory, accounting and ERP-style systems for small businesses." },
  { slug: "supabase", name: "Supabase", description: "Row Level Security, authentication, database design and application security." },
];

/** A run of inline text, or a link with real anchor text pointing at a route that actually exists. */
export type BlogRun = string | { text: string; href: string; external?: boolean };

export type BlogBlock =
  | { type: "p"; runs: BlogRun[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: BlogRun[][] }
  | { type: "flow"; steps: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; title?: string; runs: BlogRun[] };

/** `label` is the alt text / accessible name. With `image`, the file is shown; without it, a code-drawn cover is used. */
export type BlogCover = { icon: "pos" | "inventory"; label: string; image?: string; ogImage?: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Optional shorter search-result title (" | Lyndell Dobluis" is appended, keep the total ≤ 60 chars). */
  seoTitle?: string;
  description: string;
  category: BlogCategory["slug"];
  publishedAt: string; // ISO date, the date the article actually went live
  updatedAt?: string;
  cover: BlogCover;
  /** Slugs of posts to surface under "Related articles", in order. */
  relatedSlugs: string[];
  body: BlogBlock[];
};

function runText(run: BlogRun): string {
  return typeof run === "string" ? run : run.text;
}

/** ~200 wpm, rounded up, minimum 1 — computed from the actual body so it can't drift from the content. */
export function readingTime(post: BlogPost): number {
  let words = 0;
  for (const block of post.body) {
    if (block.type === "p" || block.type === "callout") words += block.runs.map(runText).join(" ").split(/\s+/).filter(Boolean).length;
    else if (block.type === "h2" || block.type === "h3") words += block.text.split(/\s+/).filter(Boolean).length;
    else if (block.type === "ul") words += block.items.flat().map(runText).join(" ").split(/\s+/).filter(Boolean).length;
    else if (block.type === "flow") words += block.steps.join(" ").split(/\s+/).filter(Boolean).length;
    else if (block.type === "table") words += [...block.headers, ...block.rows.flat()].join(" ").split(/\s+/).filter(Boolean).length;
  }
  return Math.max(1, Math.round(words / 200));
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-pos-system-helps-small-businesses",
    title: "How a POS System Can Help Small Businesses Manage Sales and Inventory",
    seoTitle: "How a POS System Helps Small Businesses",
    description:
      "Learn how a POS system helps small businesses track sales, manage inventory, reduce errors, and make better decisions using real-time business information.",
    category: "business-software",
    publishedAt: "2026-09-15",
    cover: { icon: "pos", label: "A point of sale screen connected to an inventory list" },
    relatedSlugs: ["why-sari-sari-stores-need-better-inventory-management", "how-to-choose-pos-system-sari-sari-store"],
    body: [
      {
        type: "p",
        runs: [
          "Running a small business is more than ringing up sales. At the end of a busy day, most owners are really trying to answer a short list of questions: what did I sell, how much did it come to, which products are moving, which ones are running low, and what do I need to reorder before I lose a sale to an empty shelf.",
        ],
      },
      {
        type: "p",
        runs: [
          "A point-of-sale (POS) system doesn't answer those questions by magic. What it does is organize the same information you'd otherwise be tracking on paper or from memory, so the answers are a few taps away instead of an evening spent counting stock. This article walks through what a POS system actually does, where it helps, and how to tell whether one is worth it for your store.",
        ],
      },
      { type: "h2", text: "What is a POS system?" },
      {
        type: "p",
        runs: [
          "A point-of-sale system is software that records sales and keeps track of the transaction details around them — what was sold, at what price, and when. Depending on the system, it can also connect that sale to inventory, to a specific customer, to reports, to payments, and, for stores that extend credit, to customer utang.",
        ],
      },
      {
        type: "p",
        runs: [
          "The important word is \"connect.\" A cash register or a notebook can record that a sale happened. A POS system can tie that sale to everything downstream of it — which is where the real benefit comes from.",
        ],
      },
      { type: "h2", text: "1. Track sales more accurately" },
      {
        type: "p",
        runs: [
          "Every transaction gets recorded the moment it happens, with the total calculated for you instead of added up by hand. Over a full day of customers, that removes a lot of small arithmetic mistakes, and it leaves you with a transaction history you can actually look back on — not a stack of receipts or a notebook page you have to re-add.",
        ],
      },
      {
        type: "p",
        runs: [
          "Compared with handwritten records, the difference isn't that the POS is smarter than you are. It's that it never gets tired at the end of a long shift, and it never loses a page.",
        ],
      },
      { type: "h2", text: "2. Automatically update inventory" },
      { type: "flow", steps: ["Sale", "Transaction recorded", "Inventory updated", "Current stock available"] },
      {
        type: "p",
        runs: [
          "When a POS is set up with your product list, a sale doesn't just get logged — it also reduces the stock count for that product. You stop needing to manually subtract from your inventory sheet after every transaction, which is one of the easiest places for a stock count to quietly drift from reality.",
        ],
      },
      {
        type: "p",
        runs: [
          "That said, no POS system guarantees a perfectly accurate stock count on its own. Damaged goods, unrecorded sales, and counting mistakes still happen — a POS reduces how often they happen and makes them easier to catch, not impossible.",
        ],
      },
      { type: "h2", text: "3. Identify low-stock products" },
      {
        type: "p",
        runs: [
          "Once sales and stock are connected, the system can tell you which products are getting close to a reorder point — instead of you noticing only when a customer asks for something that's already gone. Useful concepts here are low-stock alerts, a reorder level per product, current quantity on hand, and how quickly a given product is actually moving.",
        ],
      },
      {
        type: "p",
        runs: [
          "For a small retailer with a limited shelf and a limited budget, that visibility matters more than it does for a large store with a warehouse to fall back on. Every peso tied up in the wrong stock is a peso that isn't earning anything.",
        ],
      },
      { type: "h2", text: "4. Understand your best-selling products" },
      {
        type: "p",
        runs: [
          "Sales history builds up automatically, and it can show you which products are fast-moving, which are slow, which categories do best, and how demand shifts over time — day to day, or season to season. That's the kind of pattern that's genuinely hard to hold in your head once you carry more than a handful of products.",
        ],
      },
      {
        type: "p",
        runs: [
          "Business owners can use this to buy more of what actually sells and less of what sits on the shelf, instead of restocking on habit or guesswork.",
        ],
      },
      { type: "h2", text: "5. Reduce manual errors" },
      {
        type: "ul",
        items: [
          ["Incorrect totals from manual addition"],
          ["Sales that never get written down in the first place"],
          ["Stock counts that don't match what's actually on the shelf"],
          ["The same transaction recorded twice"],
          ["Discrepancies that are almost impossible to trace back to their source"],
        ],
      },
      {
        type: "p",
        runs: [
          "Software reduces these problems by removing the manual re-entry step where most of them creep in. It doesn't remove the need for proper setup and day-to-day discipline — a POS that's used carelessly can still produce a messy report, just a digital one.",
        ],
      },
      { type: "h2", text: "6. Save time on daily operations" },
      {
        type: "p",
        runs: [
          "Recording sales, adding up totals, checking what sold yesterday, reviewing what's left in stock, and putting together a basic report are all repetitive work. A POS system doesn't remove that work entirely, but it shrinks the time it takes, which is time an owner can spend on customers, on the counter, or simply closing earlier.",
        ],
      },
      { type: "h2", text: "7. Make better business decisions" },
      { type: "flow", steps: ["Better data", "Better visibility", "Better decisions"] },
      {
        type: "p",
        runs: [
          "Organized sales and stock information gives you a real answer to questions like: what sells the most, what's slow, what should I restock this week, how much did I actually sell today, and how are sales trending over the past month. None of those are complicated questions — they're just hard to answer accurately from memory once a store has more than a few dozen products moving through it.",
        ],
      },
      { type: "h2", text: "Is a POS system worth it for a small business?" },
      {
        type: "p",
        runs: [
          "It depends on your situation, not a general rule. Worth weighing: how many transactions you handle in a day, how many products you carry, how complex your inventory already is, how many staff ring up sales, whether you need reporting to make purchasing decisions, your budget, and where your business is headed. A store doing a handful of transactions a day with a dozen products has a very different calculation than one running several registers with hundreds of SKUs and staff on shift.",
        ],
      },
      {
        type: "p",
        runs: [
          "Not every small business needs to buy a POS system right away. But once tracking sales and stock by hand starts costing more time — or more missed sales — than the system would, it's worth a serious look.",
        ],
      },
      { type: "h2", text: "Where Tindahan POS fits in" },
      {
        type: "callout",
        runs: [
          {
            text: "Tindahan POS",
            href: "/projects/tindahan-pos",
          },
          " is what I built to answer exactly the questions in this article, for the kind of store I actually run myself. It's designed to help Filipino small businesses keep track of sales, inventory, and customer utang in one practical system — not a scaled-down version of software built for a supermarket.",
        ],
      },
      {
        type: "p",
        runs: [
          "The core of it, in one line: know your sales, know your stock, know your utang. In practice that's fast checkout, stock levels with low-stock alerts, customer credit tracking with running balances, staff accounts with their own permissions, and daily sales and stock reports — all built on real usage, not a feature list assembled for a brochure.",
        ],
      },
      {
        type: "p",
        runs: [
          "Inventory is really its own subject, and it's worth reading on its own — especially for sari-sari stores, where shelf space and cash flow are tighter than almost any other kind of retail. I wrote about it separately in ",
          { text: "why sari-sari stores need better inventory management", href: "/blog/why-sari-sari-stores-need-better-inventory-management" },
          ".",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        runs: [
          "A POS system's real job is to organize sales information well enough that it connects cleanly to inventory. Once that connection exists, low-stock alerts and sales reports follow naturally, and a lot of repetitive daily work gets automated away. None of that replaces good judgment — it just gives you better information to apply it to.",
        ],
      },
      {
        type: "p",
        runs: [
          "If you're weighing whether this is worth setting up for your own store, take a look at ",
          { text: "Tindahan POS", href: "/projects/tindahan-pos" },
          ", or ",
          { text: "get in touch", href: "/#contact" },
          " and I'll walk you through what it actually looks like day to day.",
        ],
      },
    ],
  },
  {
    slug: "why-sari-sari-stores-need-better-inventory-management",
    title: "Why Sari-Sari Stores Need Better Inventory Management",
    seoTitle: "Inventory Management for Sari-Sari Stores",
    description:
      "Learn why inventory management matters for sari-sari stores and how better stock tracking can reduce shortages, overstocking, losses, and missed sales.",
    category: "business-software",
    publishedAt: "2026-09-15",
    cover: {
      icon: "inventory",
      label:
        "Article banner: a sari-sari store owner checking stock against a Tindahan POS inventory screen on a laptop, beside the title \"Why Sari-Sari Stores Need Better Inventory Management\"",
      image: "/assets/blog/sari-sari-store-inventory-management.webp",
      ogImage: "/assets/blog/sari-sari-store-inventory-management-og.jpg",
    },
    relatedSlugs: ["how-pos-system-helps-small-businesses", "how-to-choose-pos-system-sari-sari-store"],
    body: [
      {
        type: "p",
        runs: [
          "I own and run a small sari-sari store myself, alongside building software for stores like it, and inventory is the part that quietly determines whether a good week actually shows up as profit. Everything sitting on your shelves is money you've already spent, waiting to turn back into cash. Manage it poorly and you feel it in specific, familiar ways: stockouts on the items customers actually want, cash tied up in things that don't move, products that expire before they sell, counts that don't match what's on the shelf, and restocking decisions made from memory instead of what's really happening.",
        ],
      },
      { type: "h2", text: "Inventory is more than counting products" },
      {
        type: "p",
        runs: [
          "Good inventory management isn't just knowing how many units of something you have right now. It's knowing what you carry, how much of it, which products sell quickly, which sell slowly, which need restocking soon, which have a shelf life you need to watch, and how all of that shifts over time. Most of the pain in a small store comes from missing one of those, not from a wrong number on a single shelf.",
        ],
      },
      { type: "h2", text: "1. Avoid running out of fast-moving products" },
      {
        type: "p",
        runs: [
          "A stockout on a product people buy every day is a lost sale, and often a lost visit — the customer just walks to the next store. Which products count as \"fast-moving\" is specific to your own store and neighborhood, not a fixed list; common daily necessities like beverages, snacks, instant noodles, coffee and household essentials are examples of the kind of item this usually applies to, not a guarantee that those specific products will move fast in your store.",
        ],
      },
      { type: "h2", text: "2. Avoid overstocking" },
      {
        type: "p",
        runs: [
          "The opposite mistake costs money in a quieter way. Buying more than you can sell in a reasonable time ties up cash you might need elsewhere, risks expiration on perishable or dated goods, creates storage problems in a store that likely doesn't have a back room to spare, and leaves you with slow-moving stock that's hard to convert back to cash.",
        ],
      },
      {
        type: "p",
        runs: [
          "The balance to aim for is having enough on hand to avoid stockouts on what actually sells, without locking up more capital than the shelf space and cash flow can support.",
        ],
      },
      { type: "h2", text: "3. Identify fast-moving and slow-moving products" },
      {
        type: "table",
        headers: ["Movement", "What to do"],
        rows: [
          ["Fast-moving", "Prioritize availability — don't let these run out"],
          ["Slow-moving", "Review whether to keep buying it, and how much"],
        ],
      },
      {
        type: "p",
        runs: [
          "Once you have transaction history to look back on, this stops being a guess. It's one of the clearest, most immediately useful things stock tracking gives you.",
        ],
      },
      { type: "h2", text: "4. Monitor expiration and stock rotation" },
      { type: "flow", steps: ["First in", "First out"] },
      {
        type: "p",
        runs: [
          "For anything with a shelf life, rotation matters as much as the count. The basic idea is FIFO — first in, first out — so older stock sells before it expires, not after. How well that actually happens depends on your store's physical setup: where new deliveries get placed, and whether staff are actually rotating stock forward rather than just adding to the front.",
        ],
      },
      { type: "h2", text: "5. Reduce inventory discrepancies" },
      {
        type: "ul",
        items: [
          ["Recording mistakes at the point of sale"],
          ["Damaged goods that never get written off"],
          ["Items that go missing between delivery and the shelf"],
          ["Sales that don't get recorded at all"],
          ["Manual counts that are simply off"],
        ],
      },
      {
        type: "p",
        runs: [
          "A system can help you spot when your recorded stock and your actual stock have drifted apart, but it can't replace a physical count entirely. Discrepancies still need someone to walk the shelves now and then and check.",
        ],
      },
      { type: "h2", text: "6. Make purchasing decisions using real information" },
      {
        type: "p",
        runs: [
          "Instead of restocking from memory or habit, sales and inventory history can answer the questions that actually matter: what should I reorder, how often does it actually sell, which products have gone slow, and how much do I currently have on hand. That's a more reliable basis for spending your next batch of restocking money than gut feel.",
        ],
      },
      { type: "h2", text: "7. Connect sales and inventory" },
      { type: "flow", steps: ["Customer purchase", "Sale recorded", "Stock reduced", "Inventory updated", "Restocking decision"] },
      {
        type: "p",
        runs: [
          "This is the concept that everything else in this article depends on. If a sale doesn't reliably reduce your recorded stock, none of the visibility above holds up — you're back to counting shelves by hand to find out what's really there. I wrote more about how that connection works, and what a POS system does with it, in ",
          { text: "how a POS system helps small businesses manage sales and inventory", href: "/blog/how-pos-system-helps-small-businesses" },
          ".",
        ],
      },
      { type: "h2", text: "Manual inventory vs. digital inventory" },
      {
        type: "table",
        headers: ["Manual tracking", "Digital tracking"],
        rows: [
          ["Can work for a very small, simple inventory", "Better once inventory starts growing"],
          ["Low upfront technology requirement", "Requires software and a device"],
          ["Depends entirely on manual recording", "Can automate the calculations"],
          ["Harder to look back on historical patterns", "Easier to review as a report"],
          ["Higher risk of manual errors", "Can reduce, but not eliminate, repetitive errors"],
        ],
      },
      {
        type: "p",
        runs: [
          "To be clear, digital tracking doesn't eliminate errors — it removes the specific errors that come from manual recalculation, and makes the remaining ones easier to catch. It's a difference of degree, not a guarantee.",
        ],
      },
      { type: "h2", text: "Does a sari-sari store need a POS?" },
      {
        type: "p",
        runs: [
          "It depends on your transaction volume, how many products you carry, how complex that inventory actually is, whether you have staff working the counter besides yourself, whether your business is growing, and whether you need sales reporting to make decisions with confidence. A store with a short, stable product list and one person behind the counter has a different answer than one juggling deliveries, a helper, and utang for a few dozen regular customers.",
        ],
      },
      { type: "h2", text: "Where Tindahan POS fits in" },
      {
        type: "callout",
        runs: [
          {
            text: "Tindahan POS",
            href: "/projects/tindahan-pos",
          },
          " is built to help small businesses manage sales, inventory and customer utang together, without requiring an expensive traditional POS setup. Know your sales. Know your stock. Know your utang.",
        ],
      },
      {
        type: "p",
        runs: [
          "On the inventory side specifically, that means stock levels tied to real sales, low-stock alerts before you run out, and reports that show what's actually moving — the same connection described above, applied to your own product list instead of a hypothetical one. If you're curious how it fits together with sales and checkout, that's covered in the companion article on ",
          { text: "POS systems for small businesses", href: "/blog/how-pos-system-helps-small-businesses" },
          ".",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        runs: [
          "Inventory management for a sari-sari store isn't really about counting products — it's about understanding how that inventory affects your sales, your cash, your purchasing decisions, your customer service, and eventually your ability to grow. Get that connection wrong and every other part of the business feels harder than it needs to.",
        ],
      },
      {
        type: "p",
        runs: [
          "If you want to see how sales and stock work together in practice, take a look at ",
          { text: "Tindahan POS", href: "/projects/tindahan-pos" },
          ", or ",
          { text: "get in touch", href: "/#contact" },
          " and I'll show you around it.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-pos-system-sari-sari-store",
    title: "How to Choose a POS System for a Sari-Sari Store",
    seoTitle: "How to Choose a Sari-Sari Store POS System",
    description: "What a sari-sari store really needs from a POS system: the must-have features, which device to use, internet, costs, and a simple checklist before you buy.",
    category: "business-software",
    publishedAt: "2026-09-15",
    cover: {
      icon: "pos",
      label:
        "Article banner: a sari-sari store owner ringing up a sale on a Tindahan POS terminal at the counter, beside the title \"How to Choose the Right POS System for Your Sari-Sari Store\"",
      image: "/assets/blog/choose-pos-sari-sari-store.webp",
      ogImage: "/assets/blog/choose-pos-sari-sari-store-og.jpg"
    },
    relatedSlugs: [
      "how-pos-system-helps-small-businesses",
      "why-sari-sari-stores-need-better-inventory-management"
    ],
    body: [
      {
        type: "p",
        runs: [
          "From the outside, a sari-sari store looks simple to run. A customer picks a few items, pays, and leaves."
        ]
      },
      {
        type: "p",
        runs: [
          "Behind the counter, you're answering the same questions all day. What did I sell? How much stock is left? What do I need to reorder? Who still has utang? Does the cash in the drawer match my sales?"
        ]
      },
      {
        type: "p",
        runs: [
          "Most stores answer those questions with a notebook, a calculator and a good memory. That works until the product list gets longer and the notebook can't keep up. That's usually when owners start looking for a sari-sari store POS system."
        ]
      },
      {
        type: "p",
        runs: [
          "The catch is that most POS software is built for supermarkets, restaurants and retail chains, with prices and complexity to match. I run a small sari-sari store myself and built Tindahan POS for stores like mine, so this guide focuses on what actually matters at a small counter. It should help whichever system you end up choosing."
        ]
      },
      {
        type: "h2",
        text: "When manual tracking stops working"
      },
      {
        type: "p",
        runs: [
          "Notebooks, calculators, spreadsheets and supplier receipts are a perfectly good way to start. For a new store with a short product list, they're often the most practical option. The trouble begins as sales and products grow:"
        ]
      },
      {
        type: "ul",
        items: [
          [
            "Sales are hard to review, because transactions end up scattered across notebooks and loose sheets of paper."
          ],
          [
            "Your records drift away from the shelf: the notebook says 20 pieces, but the shelf has 15."
          ],
          [
            "Restocking turns into guesswork, and you find out an item is gone when a customer asks for it."
          ],
          [
            "When the cash doesn't match your sales, finding the gap can take a whole evening."
          ],
          [
            "Utang gets messy. Remembering who owes what, and how much they've already paid, is one of the hardest things to track on paper."
          ]
        ]
      },
      {
        type: "p",
        runs: [
          "Notebooks aren't the problem. Manual processes simply get harder to keep up with as the business grows."
        ]
      },
      {
        type: "h2",
        text: "Start with the problems you actually have"
      },
      {
        type: "p",
        runs: [
          "POS software is usually sold on a long feature list: inventory, accounting, customer management, analytics, multiple branches, staff scheduling, integrations. It's easy to be impressed."
        ]
      },
      {
        type: "p",
        runs: [
          "A better question is whether you'll use those features every day. For a sari-sari store, the right POS is rarely the one with the most features. It's the one that makes your most important daily tasks faster and easier. If you're still deciding whether a POS is worth it at all, start with ",
          {
            text: "how a POS system helps small businesses manage sales and inventory",
            href: "/blog/how-pos-system-helps-small-businesses"
          },
          "."
        ]
      },
      {
        type: "h2",
        text: "The features that matter most"
      },
      {
        type: "h3",
        text: "1. Fast, simple checkout"
      },
      {
        type: "p",
        runs: [
          "You'll ring up sales hundreds of times a day, so this has to be quick. A sale should take a few taps, not a trip through several screens:"
        ]
      },
      {
        type: "flow",
        steps: [
          "Find the product",
          "Enter the quantity",
          "Check the total",
          "Record the payment"
        ]
      },
      {
        type: "p",
        runs: [
          "When you try a POS, time yourself ringing up a typical three-item sale. If it feels slower than your notebook, your customers will feel it too."
        ]
      },
      {
        type: "h3",
        text: "2. Inventory that updates with every sale"
      },
      {
        type: "p",
        runs: [
          "Every sale should reduce your stock automatically, so you can see at any moment how much of each product is left. Test this before you commit: sell one item and check that the count went down. Software only knows what's entered into it, though, so spoilage, damaged goods and unrecorded sales still call for a regular physical count. The article on ",
          {
            text: "why sari-sari stores need better inventory management",
            href: "/blog/why-sari-sari-stores-need-better-inventory-management"
          },
          " goes deeper on this."
        ]
      },
      {
        type: "h3",
        text: "3. Low-stock alerts"
      },
      {
        type: "p",
        runs: [
          "You shouldn't learn that your best-selling coffee is gone when a customer asks for it. Look for a system that lets you set a reorder level for each product and shows you a short list of what's running low, so you can restock before it costs you a sale."
        ]
      },
      {
        type: "h3",
        text: "4. Utang tracking with running balances"
      },
      {
        type: "p",
        runs: [
          "If regular customers buy on credit, this may matter as much as inventory, and it's one of the first things generic POS software leaves out. At a minimum, you should be able to record a sale on credit, accept partial payments, and see each customer's current balance and payment history without flipping through pages."
        ]
      },
      {
        type: "h3",
        text: "5. Clear daily sales"
      },
      {
        type: "p",
        runs: [
          "At closing time, you want quick answers: how much you sold, how many transactions you made, which products moved, and how today compares with previous days. If getting those numbers still takes a calculator, the POS isn't doing its job."
        ]
      },
      {
        type: "h3",
        text: "6. Staff accounts, if someone else minds the counter"
      },
      {
        type: "p",
        runs: [
          "If a family member or helper handles sales, give them their own login. Separate cashier accounts let you control what each person can see and do, and let you review who recorded which sale."
        ]
      },
      {
        type: "h2",
        text: "Features you probably don't need yet"
      },
      {
        type: "p",
        runs: [
          "More features don't automatically make a better POS. A small sari-sari store rarely needs:"
        ]
      },
      {
        type: "ul",
        items: [
          [
            "Complex enterprise reporting"
          ],
          [
            "Advanced customer relationship management (CRM) tools"
          ],
          [
            "Warehouse management"
          ],
          [
            "Large-scale multi-branch features"
          ],
          [
            "Staff scheduling"
          ],
          [
            "Dozens of third-party integrations"
          ]
        ]
      },
      {
        type: "p",
        runs: [
          "These tools are valuable for bigger businesses, but they make software harder to learn and often more expensive. Choose for the store you have today and where you realistically expect it to go. You can always upgrade later."
        ]
      },
      {
        type: "h2",
        text: "What device do you need?"
      },
      {
        type: "p",
        runs: [
          "A common myth is that you need to buy an expensive POS terminal. Depending on the software, a device you already own may be enough."
        ]
      },
      {
        type: "ul",
        items: [
          ["Smartphone: handy for checking sales, stock and reports while you're away from the store, but a small screen can feel cramped when you ring up many sales."],
          ["Tablet: a bigger screen that still fits on a small counter. Give it a stand or a safe spot near the register."],
          ["Laptop: the most comfortable option for managing products, reviewing reports and bookkeeping, if you have the counter space."]
        ]
      },
      {
        type: "p",
        runs: [
          "So instead of asking which POS machine to buy, ask which device you already have that can run the system comfortably."
        ]
      },
      {
        type: "h2",
        text: "Do you need an internet connection?"
      },
      {
        type: "p",
        runs: [
          "It depends on the system. Cloud-based POS software stores your data online, which lets you check on your store from different devices and places, but it also depends on a working connection. Before you commit, ask the provider:"
        ]
      },
      {
        type: "ul",
        items: [
          [
            "Does every sale need the internet?"
          ],
          [
            "What happens when the connection drops in the middle of a busy day?"
          ],
          [
            "Is there an offline mode, and how does data sync once you're back online?"
          ],
          [
            "Where is my business data stored, and can I export it?"
          ]
        ]
      },
      {
        type: "p",
        runs: [
          "Brownouts and weak signal are part of running a store in many areas, so it's better to know the answers before you depend on the system."
        ]
      },
      {
        type: "h2",
        text: "How much should you spend?"
      },
      {
        type: "p",
        runs: [
          "You don't need to spend thousands of pesos on hardware before you start. Look at the costs separately:"
        ]
      },
      {
        type: "table",
        headers: [
          "Cost",
          "What to check"
        ],
        rows: [
          [
            "Software",
            "Monthly or annual subscription, or a one-time license, and what each plan includes"
          ],
          [
            "Hardware",
            "Whether the phone, tablet or laptop you already have is enough"
          ],
          [
            "Internet",
            "Whether you need a steadier connection or a mobile data backup"
          ],
          [
            "Optional extras",
            "A barcode scanner, receipt printer or cash drawer: useful later, rarely needed on day one"
          ]
        ]
      },
      {
        type: "p",
        runs: [
          "Start with what your store needs now, and add equipment as the business grows."
        ]
      },
      {
        type: "h2",
        text: "A simple checklist before you choose"
      },
      {
        type: "p",
        runs: [
          "Bring these questions to any POS demo or free trial."
        ]
      },
      {
        type: "h3",
        text: "Sales"
      },
      {
        type: "ul",
        items: [
          [
            "Can I record a typical sale in a few seconds?"
          ],
          [
            "Can I look up past transactions?"
          ],
          [
            "Can I see today's total sales at a glance?"
          ]
        ]
      },
      {
        type: "h3",
        text: "Inventory"
      },
      {
        type: "ul",
        items: [
          [
            "Does every sale update my stock automatically?"
          ],
          [
            "Can I set reorder levels and see what's running low?"
          ]
        ]
      },
      {
        type: "h3",
        text: "Customers and utang"
      },
      {
        type: "ul",
        items: [
          [
            "Can I record a sale on credit?"
          ],
          [
            "Can I record partial payments and see each customer's balance?"
          ]
        ]
      },
      {
        type: "h3",
        text: "Staff"
      },
      {
        type: "ul",
        items: [
          [
            "Can I create separate cashier accounts?"
          ],
          [
            "Can I control what each person can see and do?"
          ]
        ]
      },
      {
        type: "h3",
        text: "Devices, internet and cost"
      },
      {
        type: "ul",
        items: [
          [
            "Will it run on a device I already own?"
          ],
          [
            "What happens when the internet goes down?"
          ],
          [
            "Is the price affordable, with no hidden fees?"
          ]
        ]
      },
      {
        type: "callout",
        title: "The question that matters most",
        runs: [
          "Can I use this every day without getting frustrated? If the answer is no, the rest of the checklist doesn't matter."
        ]
      },
      {
        type: "h2",
        text: "Why I built Tindahan POS"
      },
      {
        type: "p",
        runs: [
          {
            text: "Tindahan POS",
            href: "/projects/tindahan-pos"
          },
          " started from a simple idea: a small store shouldn't need enterprise software just to understand its own day. It covers the essentials in this guide, including fast checkout, inventory with low-stock alerts, utang tracking with running balances, staff accounts with their own permissions, and daily sales reports, in a web app for the counter and a companion mobile app for owners."
        ]
      },
      {
        type: "callout",
        runs: [
          "Know your sales. Know your stock. Know your utang."
        ]
      },
      {
        type: "h2",
        text: "Final thoughts"
      },
      {
        type: "p",
        runs: [
          "Choosing a POS isn't about finding the longest feature list. It's about finding the system that solves your store's real problems: recording sales quickly, knowing your stock, keeping utang under control, and running on a device you already own at a price you can afford."
        ]
      },
      {
        type: "p",
        runs: [
          "The best POS for a sari-sari store isn't the most powerful one. It's the one that makes running your store easier. If you'd like to see how Tindahan POS handles all of this, ",
          {
            text: "get in touch",
            href: "/#contact"
          },
          " and I'll walk you through it."
        ]
      }
    ]
  },
];

export const postBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const relatedPosts = (post: BlogPost): BlogPost[] =>
  post.relatedSlugs.map((s) => postBySlug(s)).filter((p): p is BlogPost => !!p);

/** Articles whose body links to the given internal route (used for "Related reading" on project pages). */
export const postsLinkingTo = (href: string): BlogPost[] =>
  blogPosts.filter((post) =>
    post.body.some((block) => {
      const runs = block.type === "p" || block.type === "callout" ? block.runs : block.type === "ul" ? block.items.flat() : [];
      return runs.some((run) => typeof run !== "string" && run.href === href);
    }),
  );
