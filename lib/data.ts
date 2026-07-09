export const NAV = [
  { label: "Pricing", href: "/pricing" },
  { label: "Demo Sites", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const STRIPE_LINKS = {
  starter: "https://buy.stripe.com/bJe6oHddMdpScC13USc3m01",
  growth: "https://buy.stripe.com/28E6oH3DcetW8lL0IGc3m05",
  maintenance: "https://buy.stripe.com/4gM28ra1A2Le59z9fcc3m04",
};

export const TIERS = [
  {
    name: "Starter",
    price: "$299.99",
    tagline: "A clean, professional online presence — fast.",
    blurb:
      "For businesses that need to look legitimate online this week, not next quarter.",
    features: [
      "One-page professional website",
      "Mobile-first design",
      "Click-to-call & directions",
      "Your services, hours & photos",
      "Built to show up in Google & AI search",
      "Live in days, not weeks",
    ],
    cta: "Start with Starter",
    href: STRIPE_LINKS.starter,
    external: true,
    featured: false,
  },
  {
    name: "Growth",
    price: "$499.99",
    tagline: "More sections. Better presentation. Built to convert.",
    blurb:
      "For businesses ready to turn lookers into callers — reviews, galleries, service pages and stronger calls to action.",
    features: [
      "Everything in Starter",
      "Multi-section conversion layout",
      "Review & testimonial showcase",
      "Photo gallery / menu / service list",
      "Lead capture form to your inbox",
      "Stronger structure for local search",
    ],
    cta: "Grow with Growth",
    href: STRIPE_LINKS.growth,
    external: true,
    featured: true,
  },
  {
    name: "Pro / Premium",
    price: "Contact for pricing",
    tagline: "A complete online system, built around your business.",
    blurb:
      "For businesses that need a custom build — extra pages, booking, payments, online ordering or special integrations.",
    features: [
      "Fully custom design & pages",
      "Booking / scheduling setup",
      "Payments or online ordering",
      "Special integrations",
      "A complete online presence, managed",
      "Scoped and quoted to fit",
    ],
    cta: "Talk to us",
    href: "/contact",
    external: false,
    featured: false,
  },
];

export const INDUSTRIES = [
  {
    name: "Restaurants & Food Trucks",
    pain: "Hungry customers check your menu on their phone before they ever show up. If it's a blurry photo on Facebook, many keep scrolling.",
    build: "Menu, hours, location, photos that make people hungry — one tap to call or get directions.",
    emoji: "🌮",
  },
  {
    name: "Barbers & Salons",
    pain: "Your work sells itself — if people can see it. A dead Instagram link isn't a portfolio.",
    build: "A sharp gallery of your cuts and styles, your chair prices, and a fast way to book or call.",
    emoji: "💈",
  },
  {
    name: "Cleaning Services",
    pain: "Homeowners won't let a company inside their house if it doesn't look legitimate online.",
    build: "A trust-first site: your services, your area, your reviews, and a quote form that hits your inbox.",
    emoji: "🧼",
  },
  {
    name: "Contractors & Trades",
    pain: "Big-ticket jobs go to whoever looks most established. A missing website costs you bids you never knew about.",
    build: "Project photos, services, service area and licensing info — proof you're the safe choice.",
    emoji: "🔨",
  },
  {
    name: "Auto & Detailing",
    pain: "Before-and-after shots win customers. Buried in a feed, they win nobody.",
    build: "A results-forward site with your packages, your work, and a click-to-book flow.",
    emoji: "🚗",
  },
  {
    name: "Local Services",
    pain: "Landscapers, movers, tutors, groomers — when someone searches for what you do, someone shows up. It should be you.",
    build: "A clean, findable site built around the exact searches your customers make.",
    emoji: "📍",
  },
];

export const STEPS = [
  {
    title: "Tell us about your business",
    body: "One short form. Your services, your hours, your photos, what makes you the right call. Ten minutes, tops.",
  },
  {
    title: "We build it for you",
    body: "No homework, no meetings, no 'design revisions round 6.' We design and write a site that fits your trade and your customers.",
  },
  {
    title: "You review, we refine",
    body: "You get a preview link. Tell us what to change. We polish until it feels like your business.",
  },
  {
    title: "You go live and get seen",
    body: "We launch it, connect your domain, and set it up to be found in Google and AI search. You get back to work.",
  },
];

export const DEMOS = [
  {
    name: "Ember & Oak",
    type: "Neighborhood restaurant",
    angle: "Menu-first layout, dinner-hour dark palette, one-tap reservations.",
    tone: "from-orange-500/30 to-red-500/10",
    initial: "E",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Fade District",
    type: "Barbershop",
    angle: "Gallery-led design that sells the cut before the chair.",
    tone: "from-brand/40 to-blue-500/10",
    initial: "F",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "BrightNest Cleaning",
    type: "Home cleaning service",
    angle: "Trust-first: reviews up top, instant quote form, service-area map.",
    tone: "from-emerald-500/30 to-teal-500/10",
    initial: "B",
    image:
      "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ironline Contracting",
    type: "General contractor",
    angle: "Project proof, licensing front and center, bid-request flow.",
    tone: "from-amber-500/30 to-yellow-500/10",
    initial: "I",
    image:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "La Vela Taquería",
    type: "Food truck",
    angle: "Live location, today's menu, and photos that do the selling.",
    tone: "from-rose-500/30 to-pink-500/10",
    initial: "L",
    image:
      "https://images.unsplash.com/photo-1612208176815-e132bcf971b0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Polished & Co.",
    type: "Nail salon",
    angle: "Style gallery, price list, and a booking CTA that's never more than one scroll away.",
    tone: "from-fuchsia-500/30 to-brand/10",
    initial: "P",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
  },
];

export const FAQS = [
  {
    q: "How fast will my site be live?",
    a: "Most Starter and Growth sites are live within days of getting your info — not weeks. Custom Pro builds are scoped with a timeline up front.",
  },
  {
    q: "Do I have to write anything or design anything?",
    a: "No. That's the point. You fill out one short form about your business, send us photos if you have them, and we handle the design, the writing and the setup. It's done for you.",
  },
  {
    q: "Will my site show up on Google and in AI search?",
    a: "Every site we build is structured so search engines — and AI tools like ChatGPT and Google's AI results — can actually read and recommend your business. That's the 'Seen' in iGetSeen.",
  },
  {
    q: "What if I already have a website?",
    a: "Even better — we'll rebuild it into something you're proud to send customers to. Most rebuilds fit the Growth package.",
  },
  {
    q: "What about hosting, domains and updates?",
    a: "We set all of it up for you. Our $39.99/mo maintenance plan keeps your site fast, secure and current — change your hours, update your menu, add new photos, we handle it.",
  },
  {
    q: "Why are your prices lower than agencies charging $3,000+?",
    a: "Because we've productized what agencies drag out. Focused packages, a proven process, and no bloated retainers. You get agency-level polish without agency-level overhead.",
  },
];

export const TRUST_POINTS = [
  { stat: "Days", label: "to launch, not weeks" },
  { stat: "Done for you", label: "no homework, no meetings" },
  { stat: "Mobile-first", label: "built where customers actually look" },
  { stat: "Google + AI", label: "structured to be found both places" },
];
