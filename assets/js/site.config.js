/* =====================================================================
   SITE CONFIG — the ONLY file you need to edit to change content.
   ---------------------------------------------------------------------
   • Text wrapped in *asterisks* is rendered in the italic accent font.
   • Reorder / remove sections via the `sections` array.
   • Leave any optional field as "" (empty) to hide it.
   • Icons: see assets/js/core/icons.js for available names.
   ===================================================================== */

window.SITE = {
  /* ---------- SEO / meta ---------- */
  meta: {
    title: "Aditya Jha — Websites & Apps for Growing Businesses",
    description:
      "Freelance developer building fast, modern websites and web apps for small and medium businesses. Banking-grade engineering, small-business friendly.",
    url: "https://aditya02jha.github.io", // your live URL (used for social sharing)
    ogImage: "", // e.g. "assets/img/og.png" (1200x630). Optional.
  },

  /* ---------- Brand ---------- */
  brand: {
    name: "Aditya Jha",
    logoText: "aj", // short mark shown in the nav
    role: "Web & App Developer",
    status: "Taking new projects", // small status badge
  },

  /* ---------- Theme (optional overrides of CSS tokens) ---------- */
  theme: {
    accent: "#c8ff3d", // primary highlight (lime)
    accent2: "#8b7bff", // secondary glow (violet)
    accent3: "#ff7a59", // tertiary (coral)
  },

  /* ---------- Contact ---------- */
  contact: {
    email: "aditya0000jha@gmail.com",
    // Phone & WhatsApp are written in PIECES on purpose: the full number never
    // appears in the page or this file, so spam bots can't scrape it.
    // It's only assembled when a visitor taps "Call" / "WhatsApp".
    // Edit the pieces freely (any split works). Use [] to hide the button.
    phoneParts: ["+91", "93158", "12393"],
    whatsappParts: ["91", "9315", "812393"], // country code + number, digits only
    whatsappMessage:
      "Hi Aditya! I'd like to discuss a website for my business.",
    location: "India · Working with clients worldwide",
    responseTime: "Replies within 24 hours",
    // Optional: paste a Formspree endpoint (https://formspree.io) to receive
    // form submissions by email. If empty, the form opens the visitor's mail app.
    formEndpoint: "",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/aditya02jha", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/adityajha-dev/",
      icon: "linkedin",
    },
  ],

  /* ---------- Navigation ---------- */
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],
  navCta: { label: "Start a project", href: "#contact" },

  /* ---------- Section order (remove a key to hide that section) ---------- */
  sections: [
    "hero",
    "marquee",
    "services",
    "work",
    "stats",
    "process",
    "pricing",
    "about",
    "testimonials",
    "faq",
    "contact",
  ],

  /* ---------- Hero ---------- */
  hero: {
    eyebrow: "Booking projects for Nov – Dec 2026",
    titleLines: ["Websites & apps", "that make you", "*unmissable.*"],
    subtitle:
      "I design and build fast, modern websites and custom apps for small and medium businesses — engineered with the same rigor I bring to banking platforms used by 20,000+ people.",
    primaryCta: { label: "Start your project", href: "#contact" },
    secondaryCta: { label: "See my work", href: "#work" },
    trust: [
      "Fixed, upfront pricing",
      "You own 100% of the code",
      "Launch in as little as 2 weeks",
    ],
    // Illustration in the hero (purely decorative mockup)
    mockup: {
      siteName: "Bloom Café",
      url: "bloomcafe.in",
      headline: "Fresh coffee, booked in a tap.",
      chips: [
        { icon: "bolt", text: "Loads in under 1s" },
        { icon: "phone", text: "Mobile-first" },
        { icon: "search", text: "SEO-ready" },
      ],
    },
  },

  /* ---------- Marquee (scrolling strip) ---------- */
  marquee: [
    "Business websites",
    "Online stores",
    "Booking systems",
    "Custom dashboards",
    "AI chatbots",
    "WhatsApp integration",
    "Payment gateways",
    "Landing pages",
  ],

  /* ---------- Services ----------
     size: "lg" (big tile) | "wide" | "half" | "" (small tile)            */
  services: {
    kicker: "What I build",
    title: "Everything your business needs to *win online.*",
    intro:
      "One developer, end to end — from the first sketch to the day you go live, and beyond.",
    items: [
      {
        icon: "globe",
        title: "Business Websites",
        desc: "Fast, beautiful sites that rank on Google and turn visitors into calls, bookings and sales.",
        tags: ["Responsive", "SEO", "Analytics"],
        size: "lg",
      },
      {
        icon: "cart",
        title: "Online Stores",
        desc: "Sell 24/7 with UPI, cards and Razorpay/Stripe built in.",
        tags: ["E-commerce", "Payments"],
      },
      {
        icon: "calendar",
        title: "Booking & Appointments",
        desc: "For clinics, salons, gyms and studios — no more phone tag.",
        tags: ["Scheduling", "Reminders"],
      },
      {
        icon: "layout",
        title: "Custom Web Apps",
        desc: "Inventory, CRM, billing or internal tools shaped exactly around how you work.",
        tags: ["Dashboards", "Admin panels", "APIs"],
        size: "wide",
      },
      {
        icon: "sparkle",
        title: "AI Automation",
        desc: "Chatbots and smart workflows that answer customers while you sleep.",
        tags: ["LLMs", "WhatsApp"],
        size: "half",
      },
      {
        icon: "shield",
        title: "Care & Hosting",
        desc: "Hosting, backups, security and updates handled — so you never worry about it.",
        tags: ["Monthly plan"],
        size: "half",
      },
    ],
  },

  /* ---------- Work / case studies ----------
     visual.pattern: "chart" | "code" | "toggles"
     image: optional screenshot path (overrides the generated visual)       */
  work: {
    kicker: "Selected work",
    title: "Built for *real users,* under real pressure.",
    items: [
      {
        category: "Fintech · Production",
        title: "Bond & Fixed-Income Trading Platform",
        summary:
          "Shipped three production modules for an investment-banking platform — margin raise, bond trading and fixed income — with OTP verification, multi-stage approvals and automated settlement.",
        metrics: [
          { value: "20,000+", label: "active users" },
          { value: "5,000+", label: "transactions / day" },
        ],
        stack: ["Java", "Spring Boot", "AWS", "Docker"],
        link: "",
        visual: { pattern: "chart", from: "#1b1f0a", to: "#c8ff3d" },
        image: "",
      },
      {
        category: "AI · Open source",
        title: "AutoDev — AI Software Agent",
        summary:
          "An AI agent that reads an entire codebase, plans changes and writes them — then proves they work with an automated build before anything touches disk.",
        metrics: [
          { value: "2-step", label: "plan → write pipeline" },
          { value: "100%", label: "human-approved changes" },
        ],
        stack: ["Python", "FastAPI", "LangChain", "React"],
        link: "https://github.com/aditya02jha",
        visual: { pattern: "code", from: "#140f2e", to: "#8b7bff" },
        image: "",
      },
      {
        category: "Cloud · Infrastructure",
        title: "Live Feature-Flag System",
        summary:
          "A reusable library that lets multiple apps switch features on or off instantly — no redeploys, with automatic rollback if anything goes wrong.",
        metrics: [
          { value: "0", label: "redeploys to change config" },
          { value: "Auto", label: "rollback on alarms" },
        ],
        stack: ["AWS Lambda", "AppConfig", "TypeScript"],
        link: "",
        visual: { pattern: "toggles", from: "#2a110b", to: "#ff7a59" },
        image: "",
      },
    ],
  },

  /* ---------- Stats (numbers animate on scroll) ---------- */
  stats: [
    {
      value: 6.5,
      decimals: 1,
      suffix: "+",
      label: "Years building production software",
    },
    { value: 20000, suffix: "+", label: "Users served by systems I've built" },
    {
      value: 70,
      suffix: "%",
      label: "Faster deployments after my pipeline rebuild",
    },
    { value: 80, suffix: "%+", label: "Test coverage I hold my code to" },
  ],

  /* ---------- Process ---------- */
  process: {
    kicker: "How it works",
    title: "From idea to launch in *four clear steps.*",
    steps: [
      {
        title: "Discover",
        desc: "A free 30-minute call to understand your business, customers and goals.",
        time: "Day 1",
      },
      {
        title: "Design",
        desc: "You see the look and feel before a single line of code. Revisions included.",
        time: "Week 1",
      },
      {
        title: "Build",
        desc: "I develop, test and share progress links so you're never in the dark.",
        time: "Week 2–4",
      },
      {
        title: "Launch & grow",
        desc: "Go live on your domain, plus training and 30 days of free support.",
        time: "Go live",
      },
    ],
  },

  /* ---------- Pricing (set your own numbers) ---------- */
  pricing: {
    kicker: "Pricing",
    title: "Simple, *honest* pricing.",
    intro: "Fixed quotes, no hidden fees. 50% to start, 50% on launch.",
    note: "Prices are starting points — every project gets a clear written quote.",
    plans: [
      {
        name: "Starter",
        price: "₹14,999",
        cadence: "one-time",
        desc: "Perfect for a professional first presence.",
        features: [
          "Up to 5 pages",
          "Mobile-first design",
          "Contact form + WhatsApp button",
          "Basic SEO & Google Maps",
          "Delivered in ~2 weeks",
        ],
        cta: "Get started",
      },
      {
        name: "Business",
        price: "₹34,999",
        cadence: "one-time",
        desc: "For businesses ready to grow online.",
        features: [
          "Up to 12 pages + blog",
          "Bookings or product catalogue",
          "Payment gateway (UPI / cards)",
          "Advanced SEO & analytics",
          "30 days priority support",
        ],
        cta: "Most popular",
        featured: true,
      },
      {
        name: "Custom App",
        price: "Let's talk",
        cadence: "",
        desc: "Dashboards, portals, AI tools and more.",
        features: [
          "Built around your workflow",
          "Admin panel & user logins",
          "Integrations & APIs",
          "Cloud deployment (AWS)",
          "Ongoing care plan available",
        ],
        cta: "Book a call",
      },
    ],
  },

  /* ---------- About ---------- */
  about: {
    kicker: "About me",
    title: "Banking-grade engineering, *small-business* friendly.",
    photo: "", // e.g. "assets/img/me.jpg" — leave "" to show initials
    paragraphs: [
      "I'm Aditya — a software engineer who has spent 6.5+ years building secure, high-traffic systems for an investment-banking platform.",
      "Now I bring that same discipline to small and medium businesses: sites that are fast, secure and built to last — without the agency price tag or the jargon.",
    ],
    reasons: [
      {
        icon: "shield",
        title: "Built to last",
        desc: "Tested, secure code — not a fragile template.",
      },
      {
        icon: "key",
        title: "You own it all",
        desc: "Code, domain and hosting are yours. No lock-in.",
      },
      {
        icon: "chat",
        title: "Talk to the builder",
        desc: "No middlemen. Direct, quick replies.",
      },
      {
        icon: "heart",
        title: "Here after launch",
        desc: "Support and updates whenever you need them.",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "AWS",
      "Docker",
      "SQL",
      "LangChain",
    ],
  },

  /* ---------- Testimonials ----------
     Section hides itself while this list is empty. Add REAL reviews only:
     { quote: "...", name: "Client Name", role: "Owner, Business" }          */
  testimonials: [],

  /* ---------- FAQ ---------- */
  faq: {
    kicker: "FAQ",
    title: "Questions, *answered.*",
    items: [
      {
        q: "How long does a website take?",
        a: "Most business websites go live in 2–4 weeks. Custom apps depend on scope — you'll get a clear timeline in your quote.",
      },
      {
        q: "Do I need to know anything technical?",
        a: "Not at all. I handle domain, hosting and setup, and show you how to update your content yourself.",
      },
      {
        q: "Will I own the website?",
        a: "Yes — 100%. The code, the domain and every account are in your name.",
      },
      {
        q: "What if I need changes after launch?",
        a: "Every project includes free support after launch. After that, small changes are quick and affordable, or you can choose a monthly care plan.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. I can rebuild it to be faster, more modern and better at turning visitors into customers.",
      },
    ],
  },

  /* ---------- Contact section ---------- */
  contactSection: {
    kicker: "Let's talk",
    title: "Got an idea? Let's build something *people remember.*",
    intro:
      "Tell me a little about your business. You'll get a reply — and a free plan — within 24 hours.",
    projectTypes: [
      "Website",
      "Online store",
      "Booking system",
      "Custom app",
      "AI / automation",
      "Redesign",
    ],
    budgets: [
      "Under ₹15k",
      "₹15k – 35k",
      "₹35k – 75k",
      "₹75k+",
      "Not sure yet",
    ],
    successMessage:
      "Thanks! Your message is on its way — I'll reply within 24 hours.",
  },

  /* ---------- Footer ---------- */
  footer: {
    tagline: "Websites & apps that grow your business.",
    note: "Designed & built by me — no templates.",
  },
};
