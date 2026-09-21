// Central EN/SW copy dictionary — single file for review.
// Components select their section via `copy[lang]`; `lang` defaults to "en".

export type Lang = "en" | "sw";

export interface Plan {
  tier: string;
  price: string;
  cta: string;
  href: string;
  event: string;
  tierSlug?: string;
  formStart?: string;
  featured?: boolean;
  badge?: string;
  features: string[];
}

export interface Copy {
  nav: { links: string[]; toggleLabel: string };
  hero: { l1: string; l2: string; em1: string; em2: string; body: string; cta: string; cta2: string };
  services: {
    eyebrow: string;
    heading: string;
    body: string;
    learnMore: string;
    items: { number: string; slug: string; title: string; description: string }[];
  };
  work: { eyebrow: string; heading: string; body: string; moreText: string; moreLink: string; prevAria: string; nextAria: string };
  tech: { label: string };
  process: {
    eyebrow: string;
    h1: string;
    h1em: string;
    steps: { phase: string; title: string; desc: string }[];
    counterUnit: string;
    ctaButton: string;
  };
  pricing: {
    eyebrow: string;
    heading: string;
    tabsLabel: string;
    plans: Plan[];
    customTitle: string;
    customBody: string;
    customCta: string;
  };
  stats: { value: string; unit: string; label: string; icon: string }[];
  about: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    p1: string;
    p2: string;
    p3: string;
    name: string;
    role: string;
    imgAlt: string;
  };
  faq: { heading: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    emailLabel: string;
    methods: { label: string; value: string }[];
  };
  contactForm: {
    nameLabel: string;
    namePh: string;
    emailLabel: string;
    emailPh: string;
    bizLabel: string;
    bizPh: string;
    phoneLabel: string;
    phonePh: string;
    serviceLabel: string;
    servicePh: string;
    serviceOptions: { value: string; label: string }[];
    msgLabel: string;
    msgPh: string;
    submit: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    sentLink: string;
    errorA: string;
    errorLink: string;
    errorB: string;
  };
  footer: { location: string; rights: string };
  mobileCta: { aria: string };
  cookie: { aria: string; bodyA: string; link: string; bodyB: string; accept: string; decline: string };
  dark: { aria: string };
  processPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    h1: string;
    intro: string;
    steps: { n: string; days: string; title: string; desc: string; includes: string[] }[];
    scopeNote: string;
    ctaTitle: string;
    ctaBody: string;
    calBtn: string;
  };
  privacyPage: {
    metaTitle: string;
    metaDesc: string;
    h1: string;
    updated: string;
    sections: { h: string; p: string }[];
    contactH: string;
    contactA: string;
    contactLink: string;
    contactB: string;
  };
  termsPage: {
    metaTitle: string;
    metaDesc: string;
    h1: string;
    updated: string;
    sections: { h: string; p: string }[];
    contactH: string;
    contactA: string;
    contactLink: string;
    contactB: string;
  };
  meta: { homeTitle: string; homeDesc: string };
  blogPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    h1: string;
    intro: string;
    cardTitle: string;
    cardBody: string;
    cta: string;
  };
  casePage: {
    eyebrow: string;
    categoryLabel: string;
    servicesLabel: string;
    processNote: string;
    processLink: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaBody: string;
    calBtn: string;
  };
  servicesPage: {
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    h1: string;
    intro: string;
    services: {
      slug: string;
      number: string;
      title: string;
      tagline: string;
      body: string[];
      includes: string[];
      price: string;
      cta: string;
      ctaHref: string;
    }[];
    ctaTitle: string;
    ctaBody: string;
    calBtn: string;
  };
}

const en: Copy = {
  nav: {
    links: ["Services", "Work", "Process", "Pricing", "About", "Contact"],
    toggleLabel: "Switch language",
  },
  hero: {
    l1: "Building the digital",
    l2: "infrastructure",
    em1: "your business",
    em2: "needs to grow.",
    body: "A solo agency with the precision of a specialist and the range of a full-service studio. Websites, e-commerce, and custom applications — built to convert.",
    cta: "Start a project",
    cta2: "See work",
  },
  services: {
    eyebrow: "What we do",
    heading: "Services",
    body: "Minimalist design principles, open-source technology, and organic growth strategies.",
    learnMore: "Learn more",
    items: [
      { number: "01", slug: "websites", title: "Websites", description: "Custom websites built around your brand and written for your customers. Clean, fast, mobile-first pages with local SEO so Dar es Salaam clients find you and enquire." },
      { number: "02", slug: "ecommerce", title: "E-Commerce", description: "End-to-end online stores — product listings, inventory, orders, and M-Pesa checkout in one coherent system. Built to cut fulfilment time and grow repeat sales across Tanzania." },
      { number: "03", slug: "webapps", title: "Application Development", description: "Responsive web applications built to meet your specific business needs — from internal tools to customer-facing platforms. Secure login, dashboards, databases and admin panels included." },
    ],
  },
  work: {
    eyebrow: "Case studies",
    heading: "Selected work",
    body: "Projects that moved the needle — from first website to full digital operations.",
    moreText: "More projects available on request —",
    moreLink: "get in touch",
    prevAria: "Previous project",
    nextAria: "Next project",
  },
  tech: { label: "Tech Stack" },
  process: {
    eyebrow: "How it works",
    h1: "10 days",
    h1em: "to a live website.",
    steps: [
      { phase: "Step 1", title: "Discovery & Strategy", desc: "We map your business goals, target clients, and the exact message your site needs to communicate." },
      { phase: "Step 2", title: "Design & Content", desc: "Brand-aligned layouts and copy written for your audience — no lorem ipsum, no placeholder thinking." },
      { phase: "Step 3", title: "Build & Review", desc: "The site comes together. You review, request changes, and we refine until it's exactly right." },
      { phase: "Step 4", title: "Launch & Handover", desc: "Launch the site on your domain, understand on how it runs, working for you without daily upkeep." },
    ],
    counterUnit: "steps",
    ctaButton: "See the full process →",
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Transparent packages",
    tabsLabel: "Choose a package",
    plans: [
      {
        tier: "Website",
        price: "400,000",
        cta: "Start project",
        href: "https://snippe.me/pay/website",
        event: "pay_click",
        tierSlug: undefined,
        formStart: undefined,
        featured: true,
        badge: "Start here",
        features: [
          "Custom landing page (up to 5 pages)",
          "Custom .co.tz Domain + Emails",
          "1yr Hosting + Maintenance",
          "Contact form + Chat on WhatsApp",
          "Search Engine Optimization",
        ],
      },
      {
        tier: "E-Commerce",
        price: "1,800,000",
        cta: "Start project",
        href: "https://form.jotform.com/262568319503562",
        event: "pricing_click",
        tierSlug: "ecommerce",
        formStart: "qualify",
        features: [
          "All core Website features included",
          "Secure Payment Gateway Integration",
          "Shopping Cart & Checkout system",
          "Inventory, Order Tracking & Discount systems",
          "Automated customer invoice & email notifications",
        ],
      },
      {
        tier: "Web Application",
        price: "3,200,000",
        cta: "Start project",
        href: "https://form.jotform.com/262568319503562",
        event: "pricing_click",
        tierSlug: "webapp",
        formStart: "qualify",
        features: [
          "All core Website features included",
          "Secure Authentication (Login/Signup)",
          "Interactive Dashboard + Database",
          "Business Logic & API Integration",
          "Admin Panel (manage users, content, and data)",
        ],
      },
    ],
    customTitle: "Custom Request",
    customBody: "Have a unique project in mind? Let's discuss your requirements and I'll provide a tailored quote.",
    customCta: "Contact for Quote",
  },
  stats: [
    { value: "1", unit: "person", label: "solo operator — direct contact throughout", icon: "person" },
    { value: "24", unit: "hrs", label: "response on every enquiry", icon: "clock" },
    { value: "M-Pesa", unit: "ready", label: "payment-ready builds for Tanzanian checkout", icon: "payment" },
  ],
  about: {
    eyebrow: "About",
    h1a: "One person.",
    h1b: "Full accountability.",
    p1: "I'm William — the person who answers your messages, builds your site, and thinks about your growth. No account managers. No offshore handoffs. When you work with Kiganjani Co., you work with me directly.",
    p2: "Based in Dar es Salaam, I've helped businesses across East Africa establish their digital presence and grow it with intention — not noise.",
    p3: "Every project ships fast, mobile-first and easy to maintain: modern open-source tooling, M-Pesa-ready checkout where it matters, and handover docs so your site keeps working without daily upkeep.",
    name: "William Balaile",
    role: "Founder & Digital Strategist",
    imgAlt: "William Balaile, founder of Kiganjani Co.",
  },
  faq: {
    heading: "Questions, answered",
    items: [
      {
        q: "How much does a website cost?",
        a: "Fixed packages in Tanzanian shillings: Website from TZS 400,000, E-Commerce from TZS 1,800,000, Web Application from TZS 3,200,000. Custom requests get a tailored quote after a short discovery call.",
      },
      {
        q: "How long does it take?",
        a: "A standard business website goes from brief to live in about 10 days. E-commerce stores and custom web applications take longer depending on payments, inventory and dashboard scope — you'll get a timeline before we start.",
      },
      {
        q: "Do you support M-Pesa payments?",
        a: "Yes. E-commerce builds include M-Pesa checkout alongside cart, order tracking and customer notifications, plus support for card gateways where needed.",
      },
      {
        q: "Will my site rank on Google?",
        a: "Every site ships with technical SEO basics: semantic headings, meta tags, sitemap, fast mobile-first pages and local signals for Dar es Salaam and Tanzania. Ongoing ranking depends on content and reviews, which I advise on at handover.",
      },
      {
        q: "What happens after launch?",
        a: "Website packages include 1 year of hosting and maintenance plus your custom domain and emails. You get handover docs and direct access to me — no middlemen — for fixes and improvements.",
      },
      {
        q: "Why hire a solo agency?",
        a: "You work with the person who builds your site. Faster decisions, full accountability, and lower overhead than a full-service studio — with the same range: websites, e-commerce and web applications.",
      },
    ],
  },
  contact: {
    eyebrow: "Start a project",
    heading: "Let's get your business online.",
    body: "Tell me what you're building. I'll come back within 24 hours with how I can help and what it'll take to get there.",
    emailLabel: "Email — form preferred",
    methods: [
      { label: "Phone / WhatsApp", value: "+255 782 506 217" },
      { label: "Instagram", value: "@kiganjani.co" },
      { label: "Location", value: "Dar es Salaam, Tanzania · serving East Africa remotely" },
    ],
  },
  contactForm: {
    nameLabel: "Your name",
    namePh: "Jane Doe",
    emailLabel: "Your email",
    emailPh: "jane@company.com",
    bizLabel: "Business name",
    bizPh: "Optional",
    phoneLabel: "Phone / WhatsApp",
    phonePh: "Optional",
    serviceLabel: "Service you're interested in",
    servicePh: "Select a service",
    serviceOptions: [
      { value: "Marketing Website", label: "Website" },
      { value: "E-Commerce Store", label: "E-Commerce" },
      { value: "Web Application", label: "Web Application" },
      { value: "Custom", label: "Custom request" },
    ],
    msgLabel: "Tell me about your project",
    msgPh: "What does your business do? What are you hoping to achieve online?",
    submit: "Send enquiry",
    sending: "Sending…",
    sentTitle: "Message sent.",
    sentBody: "Thanks — I'll get back to you within 24 hours.",
    sentLink: "See what happens next",
    errorA: "Something went wrong sending your message. Please try",
    errorLink: "WhatsApp",
    errorB: "instead.",
  },
  footer: {
    location: "Dar es Salaam, Tanzania",
    rights: "Kiganjani Technologies Co. All rights reserved.",
  },
  mobileCta: { aria: "Start a project on WhatsApp" },
  cookie: {
    aria: "Cookie notice",
    bodyA: "This site uses cookies for analytics, to understand how visitors find and use it. No personal data is sold or shared.",
    link: "Privacy policy",
    bodyB: "",
    accept: "Got it",
    decline: "Decline",
  },
  dark: { aria: "Toggle dark mode" },
  processPage: {
    metaTitle: "Our Process — 10 Days from Brief to Launch | Kiganjani Co.",
    metaDesc: "How Kiganjani Co. works: a structured 10-day process from discovery to launch, with M-Pesa-ready builds for Tanzanian businesses.",
    eyebrow: "Process",
    h1: "10 days — from brief to launch.",
    intro: "One person, one structured process. You always know what happens next, what you get at each step, and what is needed from you.",
    steps: [
      {
        n: "01",
        days: "Days 1–2",
        title: "Discovery & Strategy",
        desc: "We map your business goals, target clients, and the exact message your site needs to communicate.",
        includes: ["Goal and audience map", "Page outline (sitemap)", "Message and section plan"],
      },
      {
        n: "02",
        days: "Days 3–5",
        title: "Design & Content",
        desc: "Brand-aligned layouts and copy written for your audience — no lorem ipsum, no placeholder thinking.",
        includes: ["Layout draft for each page", "Copy written for your audience", "Review round before build"],
      },
      {
        n: "03",
        days: "Days 6–8",
        title: "Build & Review",
        desc: "The site comes together. You review, request changes, and we refine until it's exactly right.",
        includes: ["Working site on a preview link", "M-Pesa checkout where needed", "Two review rounds included"],
      },
      {
        n: "04",
        days: "Days 9–10",
        title: "Launch & Handover",
        desc: "Launch the site on your domain, understand how it runs, working for you without daily upkeep.",
        includes: ["Launch on your domain", "Handover notes", "Hosting and maintenance terms"],
      },
    ],
    ctaTitle: "Ready to start?",
    ctaBody: "Message on WhatsApp with what you're building — I'll reply within 24 hours with next steps.",
    scopeNote: "Timelines above are for standard websites — e-commerce and custom applications follow the same four steps, with a fixed timeline agreed before we start.",
    calBtn: "Start Project",
  },
  privacyPage: {
    metaTitle: "Privacy Policy — Kiganjani Co.",
    metaDesc: "Privacy policy for Kiganjani Co. digital agency services.",
    h1: "Privacy Policy",
    updated: "Last updated: September 2026",
    sections: [
      {
        h: "Information We Collect",
        p: "We collect information you provide directly through our contact form, including your name, email address, business name, phone number, and project details. We also collect standard web analytics data such as page views and referral sources.",
      },
      {
        h: "How We Use Your Information",
        p: "We use the information you provide to respond to your enquiries, deliver our services, and improve our website. We do not sell, trade, or otherwise transfer your personal information to third parties.",
      },
      {
        h: "Data Retention",
        p: "We retain your information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.",
      },
    ],
    contactH: "Contact",
    contactA: "For questions about this policy, use the",
    contactLink: "contact form",
    contactB: "or email",
  },
  termsPage: {
    metaTitle: "Terms of Service — Kiganjani Co.",
    metaDesc: "Terms of service for Kiganjani Co. digital agency.",
    h1: "Terms of Service",
    updated: "Last updated: September 2026",
    sections: [
      {
        h: "Services",
        p: "Kiganjani Co. provides website design, e-commerce development, and web application development services. Scope, timelines, and pricing are agreed upon in writing before work begins.",
      },
      {
        h: "Payments",
        p: "Payment terms are outlined in each individual project agreement. Work typically begins upon receipt of a deposit, with the remaining balance due upon project completion.",
      },
      {
        h: "Intellectual Property",
        p: "Upon full payment, ownership of the final deliverables transfers to the client. Kiganjani Co. retains the right to display completed work in its portfolio unless otherwise agreed.",
      },
      {
        h: "Limitation of Liability",
        p: "We are not liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid for the specific service in question.",
      },
    ],
    contactH: "Contact",
    contactA: "For questions about these terms, use the",
    contactLink: "contact form",
    contactB: "or email",
  },
  meta: {
    homeTitle: "Kiganjani Co. — Websites, E-Commerce & Applications",
    homeDesc: "Dar es Salaam web design agency building fast websites, e-commerce stores with M-Pesa checkout and custom web apps for Tanzanian businesses.",
  },
  blogPage: {
    metaTitle: "Blog — Kiganjani Co.",
    metaDesc: "Insights on web design, e-commerce, and digital growth for businesses in Tanzania and East Africa.",
    eyebrow: "Blog",
    h1: "Insights & Guides",
    intro: "Practical advice on web design, e-commerce, and growing your business online — written for entrepreneurs and teams in Tanzania and East Africa.",
    cardTitle: "Read on Hashnode",
    cardBody: "All posts are published on our Hashnode blog. Head over for the latest articles, guides, and deep dives on building your digital presence.",
    cta: "Visit Blog",
  },
  casePage: {
    eyebrow: "Case study",
    categoryLabel: "Category",
    servicesLabel: "Services",
    processNote: "Built with the same four-step process —",
    processLink: "see how it works",
    relatedTitle: "More work",
    ctaTitle: "Want something similar?",
    ctaBody: "Message on WhatsApp with what you're building — I'll reply within 24 hours with next steps.",
    calBtn: "Start Project",
  },
  servicesPage: {
    metaTitle: "Services — Websites, E-Commerce & Web Apps | Kiganjani Co.",
    metaDesc: "What Kiganjani Co. builds: custom websites from TZS 400,000, M-Pesa-ready e-commerce stores, and custom web applications for Tanzanian businesses.",
    eyebrow: "Services",
    h1: "What I build.",
    intro: "Three offers, one standard: fast, mobile-first, and easy to maintain. Pick the one that matches where your business is right now.",
    services: [
      {
        slug: "websites",
        number: "01",
        title: "Websites",
        tagline: "Your business, online in 10 days.",
        body: [
          "A custom website built around your brand and written for your customers — up to five pages covering who you are, what you offer, and how to reach you. Every page is mobile-first, loads fast on Tanzanian networks, and carries local SEO so Dar es Salaam clients find you and enquire.",
          "You get a custom .co.tz domain with matching emails, one year of hosting and maintenance, a contact form plus WhatsApp chat, and handover docs so the site keeps working without daily upkeep.",
        ],
        includes: [
          "Custom design (up to 5 pages)",
          "Custom .co.tz domain + emails",
          "1 year hosting + maintenance",
          "Contact form + WhatsApp chat",
          "Local SEO basics",
          "Live in 10 days",
        ],
        price: "from TZS 400,000",
        cta: "Start project",
        ctaHref: "https://snippe.me/pay/website",
      },
      {
        slug: "ecommerce",
        number: "02",
        title: "E-Commerce",
        tagline: "Sell online with M-Pesa checkout.",
        body: [
          "An end-to-end online store: product listings, shopping cart and checkout with M-Pesa alongside card options, plus inventory, order tracking and discount systems in one coherent setup. Built to cut fulfilment time and grow repeat sales across Tanzania.",
          "Customers get automated invoices and email notifications; you get a store you can run from your phone. Includes everything in the Website package, with a fixed timeline agreed before we start.",
        ],
        includes: [
          "Everything in Websites",
          "M-Pesa + card checkout",
          "Shopping cart & checkout system",
          "Inventory, orders & discounts",
          "Automated invoices & notifications",
          "Fixed timeline agreed up front",
        ],
        price: "from TZS 1,800,000",
        cta: "Start project",
        ctaHref: "https://form.jotform.com/262568319503562",
      },
      {
        slug: "webapps",
        number: "03",
        title: "Web Applications",
        tagline: "Software shaped around your operations.",
        body: [
          "Responsive web applications built for your specific business needs — from internal tools to customer-facing platforms. Secure login and signup, interactive dashboards backed by a real database, business logic and API integrations, plus an admin panel so you manage users, content and data yourself.",
          "Custom work takes longer than a standard website: we follow the same four-step process with a fixed scope, price and timeline agreed in writing before anything is built.",
        ],
        includes: [
          "Everything in Websites",
          "Secure authentication",
          "Dashboard + database",
          "Business logic & API integration",
          "Admin panel included",
          "Fixed scope, price & timeline",
        ],
        price: "from TZS 3,200,000",
        cta: "Start project",
        ctaHref: "https://form.jotform.com/262568319503562",
      },
    ],
    ctaTitle: "Not sure which fits?",
    ctaBody: "Message on WhatsApp with what you're building — I'll point you to the right package or a tailored quote within 24 hours.",
    calBtn: "Start Project",
  },
};

const sw: Copy = {
  nav: {
    links: ["Huduma", "Kazi", "Mchakato", "Bei", "Kuhusu", "Wasiliana"],
    toggleLabel: "Badilisha lugha",
  },
  hero: {
    l1: "Tunajenga miundombinu",
    l2: "ya kidijitali",
    em1: "biashara yako",
    em2: "inayohitaji kukua.",
    body: "Kiganjani Co. inashughulikia ugumu wa kiufundi wa kwenda mtandaoni — ili uweze kuzingatia kuendesha biashara yako. Tovuti, maduka, na programu maalum zinazobadilisha wageni kuwa wateja.",
    cta: "Anza mradi",
    cta2: "Ona kazi",
  },
  services: {
    eyebrow: "Tunachofanya",
    heading: "Huduma",
    body: "Kanuni za ubunifu rahisi, teknolojia huria, na mikakati ya ukuaji wa asili.",
    learnMore: "Soma zaidi",
    items: [
      { number: "01", slug: "websites", title: "Tovuti", description: "Tovuti maalum zinazojengwa kuzunguka chapa yako na kuandikiwa wateja wako. Kurasa safi, za haraka, zinazofanya kazi kwenye simu, na SEO ya eneo ili wateja wa Dar es Salaam wakupate na wawasiliane." },
      { number: "02", slug: "ecommerce", title: "Biashara Mtandaoni", description: "Maduka kamili ya mtandaoni — orodha za bidhaa, stoo, maagizo, na malipo ya M-Pesa katika mfumo mmoja. Yamejengwa kupunguza muda wa utoaji na kukuza mauzo ya kurudia kote Tanzania." },
      { number: "03", slug: "webapps", title: "Programu za Mtandao", description: "Programu za mtandao zinazofanya kazi kwenye vifaa vyote, zilizojengwa kukidhi mahitaji ya biashara yako — kutoka zana za ndani hadi mifumo ya wateja. Ingizo salama, dashibodi, hifadhidata na paneli za usimamizi zimejumuishwa." },
    ],
  },
  work: {
    eyebrow: "Masimulizi ya Kazi",
    heading: "Kazi Teule",
    body: "Miradi iliyoleta mabadiliko — kutoka tovuti ya kwanza hadi uendeshaji kamili wa kidijitali.",
    moreText: "Miradi zaidi inapatikana kwa ombi —",
    moreLink: "wasiliana",
    prevAria: "Mradi uliopita",
    nextAria: "Mradi unaofuata",
  },
  tech: { label: "Teknolojia" },
  process: {
    eyebrow: "Jinsi inavyofanya kazi",
    h1: "Siku 10",
    h1em: "hadi tovuti hai.",
    steps: [
      { phase: "Hatua 1", title: "Ugunduzi na Mkakati", desc: "Tunabainisha malengo ya biashara yako, wateja unaowalenga, na ujumbe sahihi ambao tovuti yako inahitaji kutoa." },
      { phase: "Hatua 2", title: "Ubunifu na Maudhui", desc: "Mipangilio inayolingana na chapa na nakala iliyoandikwa kwa hadhira yako — bila maandishi ya kupalia wala mawazo ya jumla." },
      { phase: "Hatua 3", title: "Ujenzi na Mapitio", desc: "Tovuti inakamilika. Unakagua, unaomba mabadiliko, na tunaboresha hadi iwe sawa kabisa." },
      { phase: "Hatua 4", title: "Uzinduzi na Ukabidhiano", desc: "Zindua tovuti kwenye domeni yako, elewa jinsi inavyofanya kazi, ikikuhudumia bila uangalizi wa kila siku." },
    ],
    counterUnit: "hatua",
    ctaButton: "Ona mchakato kamili →",
  },
  pricing: {
    eyebrow: "Bei",
    heading: "Vifurushi vilivyo wazi",
    tabsLabel: "Chagua kifurushi",
    plans: [
      {
        tier: "Tovuti",
        price: "400,000",
        cta: "Anza mradi",
        href: "https://snippe.me/pay/website",
        event: "pay_click",
        tierSlug: undefined,
        formStart: undefined,
        featured: true,
        badge: "Anza hapa",
        features: [
          "Ukurasa maalum wa kutua (hadi kurasa 5)",
          "Domeni maalum .co.tz + Barua pepe",
          "Mwaka 1 wa Hifadhi + Matengenezo",
          "Fomu ya mawasiliano + Gumzo la WhatsApp",
          "Uboreshaji wa Injini za Utafutaji (SEO)",
        ],
      },
      {
        tier: "Biashara Mtandaoni",
        price: "1,800,000",
        cta: "Anza mradi",
        href: "https://form.jotform.com/262568319503562",
        event: "pricing_click",
        tierSlug: "ecommerce",
        formStart: "qualify",
        features: [
          "Vipengele vyote vya msingi vya Tovuti vimejumuishwa",
          "Ujumuishaji salama wa Njia ya Malipo",
          "Mfumo wa Kikapu na Malipo",
          "Mifumo ya Stoo, Ufuatiliaji wa Maagizo na Punguzo",
          "Ankara za wateja kiotomatiki na arifa za barua pepe",
        ],
      },
      {
        tier: "Programu ya Mtandao",
        price: "3,200,000",
        cta: "Anza mradi",
        href: "https://form.jotform.com/262568319503562",
        event: "pricing_click",
        tierSlug: "webapp",
        formStart: "qualify",
        features: [
          "Vipengele vyote vya msingi vya Tovuti vimejumuishwa",
          "Uthibitishaji salama (Kuingia/Kujisajili)",
          "Dashibodi shirikishi + Hifadhidata",
          "Mantiki ya biashara na Ujumuishaji wa API",
          "Paneli ya Usimamizi (simamia watumiaji, maudhui, na data)",
        ],
      },
    ],
    customTitle: "Ombi Maalum",
    customBody: "Una mradi wa kipekee akilini? Hebu tujadili mahitaji yako nami nitakupa bei maalum.",
    customCta: "Omba Bei",
  },
  stats: [
    { value: "1", unit: "mtu", label: "mwendeshaji binafsi — unawasiliana nami moja kwa moja", icon: "person" },
    { value: "24", unit: "saa", label: "muda wa kujibu kila ombi", icon: "clock" },
    { value: "M-Pesa", unit: "tayari", label: "majengo tayari kwa malipo ya Kitanzania", icon: "payment" },
  ],
  about: {
    eyebrow: "Kuhusu",
    h1a: "Mtu mmoja.",
    h1b: "Uwajibikaji kamili.",
    p1: "Mimi ni William — mtu anayejibu ujumbe wako, anayejenga tovuti yako, na anayefikiria ukuaji wako. Hakuna wasimamizi wa akaunti. Hakuna ukabidhiano wa nje. Unapofanya kazi na Kiganjani Co., unafanya kazi nami moja kwa moja.",
    p2: "Nikiwa Dar es Salaam, nimesaidia biashara kote Afrika Mashariki kuanzisha uwepo wao wa kidijitali na kuukuza kwa makusudi — si kwa kelele.",
    p3: "Kila mradi unakamilika haraka, unafanya kazi vizuri kwenye simu na ni rahisi kuutunza: zana huria za kisasa, malipo ya M-Pesa pale yanapohitajika, na maelezo ya ukabidhiano ili tovuti yako iendelee kufanya kazi bila uangalizi wa kila siku.",
    name: "William Balaile",
    role: "Mwanzilishi & Mtaalamu wa Kidijitali",
    imgAlt: "William Balaile, mwanzilishi wa Kiganjani Co.",
  },
  faq: {
    heading: "Maswali, yamejibiwa",
    items: [
      {
        q: "Tovuti inagharimu kiasi gani?",
        a: "Vifurushi vya bei maalum kwa shilingi za Tanzania: Tovuti kuanzia TZS 400,000, Biashara Mtandaoni kuanzia TZS 1,800,000, Programu ya Mtandao kuanzia TZS 3,200,000. Maombi maalum hupata bei maalum baada ya mazungumzo mafupi ya utangulizi.",
      },
      {
        q: "Inachukua muda gani?",
        a: "Tovuti ya kawaida ya biashara kutoka muhtasari hadi uzinduzi huchukua takriban siku 10. Maduka ya mtandaoni na programu maalum huchukua muda mrefu kulingana na malipo, stoo na ukubwa wa dashibodi — utapata ratiba kabla hatujaanza.",
      },
      {
        q: "Je, mnaunga mkono malipo ya M-Pesa?",
        a: "Ndiyo. Majengo ya biashara mtandaoni yanajumuisha malipo ya M-Pesa pamoja na kikapu, ufuatiliaji wa maagizo na arifa kwa wateja, pamoja na usaidizi wa njia za kadi pale inapohitajika.",
      },
      {
        q: "Je, tovuti yangu itapatikana Google?",
        a: "Kila tovuti huja na misingi ya SEO ya kiufundi: vichwa sahihi, vitambulishi vya meta, ramani ya tovuti, kurasa za haraka zinazofanya kazi kwenye simu na ishara za eneo kwa Dar es Salaam na Tanzania. Kupanda kwa viwango kunategemea maudhui na maoni, ambayo ninakushauri wakati wa ukabidhiano.",
      },
      {
        q: "Nini kinatokea baada ya uzinduzi?",
        a: "Vifurushi vya tovuti vinajumuisha mwaka 1 wa hifadhi na matengenezo pamoja na domeni na barua pepe zako maalum. Unapata maelezo ya ukabidhiano na unawasiliana nami moja kwa moja — bila wasuluhishi — kwa marekebisho na maboresho.",
      },
      {
        q: "Kwanini uajiri wakala binafsi?",
        a: "Unafanya kazi na mtu anayejenga tovuti yako. Maamuzi ya haraka, uwajibikaji kamili, na gharama ndogo kuliko studio kubwa — na wigo ule ule: tovuti, biashara mtandaoni na programu za mtandao.",
      },
    ],
  },
  contact: {
    eyebrow: "Anza mradi",
    heading: "Hebu tuweke biashara yako mtandaoni.",
    body: "Niambie unachojenga. Nitarudi ndani ya masaa 24 na jinsi ninavyoweza kusaidia na kinachohitajika kufanikisha.",
    emailLabel: "Barua Pepe — fomu inapendekezwa",
    methods: [
      { label: "Simu / WhatsApp", value: "+255 782 506 217" },
      { label: "Instagram", value: "@kiganjani.co" },
      { label: "Mahali", value: "Dar es Salaam, Tanzania · ninahudumia Afrika Mashariki kwa mbali" },
    ],
  },
  contactForm: {
    nameLabel: "Jina lako",
    namePh: "Juma Kijana",
    emailLabel: "Barua pepe yako",
    emailPh: "juma@kampuni.com",
    bizLabel: "Jina la biashara",
    bizPh: "Si lazima",
    phoneLabel: "Simu / WhatsApp",
    phonePh: "Si lazima",
    serviceLabel: "Huduma unayovutiwa nayo",
    servicePh: "Chagua huduma",
    serviceOptions: [
      { value: "Marketing Website", label: "Tovuti" },
      { value: "E-Commerce Store", label: "Biashara Mtandaoni" },
      { value: "Web Application", label: "Programu ya Mtandao" },
      { value: "Custom", label: "Ombi maalum" },
    ],
    msgLabel: "Niambie kuhusu mradi wako",
    msgPh: "Biashara yako inafanya nini? Unataka kufikia nini mtandaoni?",
    submit: "Tuma ombi",
    sending: "Inatuma…",
    sentTitle: "Ujumbe umetumwa.",
    sentBody: "Asante — nitakujibu ndani ya masaa 24.",
    sentLink: "Ona kinachofuata",
    errorA: "Hitilafu imetokea wakati wa kutuma ujumbe wako. Tafadhali jaribu",
    errorLink: "WhatsApp",
    errorB: "badala yake.",
  },
  footer: {
    location: "Dar es Salaam, Tanzania",
    rights: "Kiganjani Technologies Co. Haki zote zimehifadhiwa.",
  },
  mobileCta: { aria: "Anza mradi kwa WhatsApp" },
  cookie: {
    aria: "Taarifa ya vidakuzi",
    bodyA: "Tovuti hii inatumia vidakuzi kwa takwimu, kuelewa jinsi wageni wanavyoipata na kuitumia. Hakuna data binafsi inayouzwa au kushirikiwa.",
    link: "Sera ya faragha",
    bodyB: "",
    accept: "Sawa",
    decline: "Kataa",
  },
  dark: { aria: "Badilisha mandhari" },
  processPage: {
    metaTitle: "Mchakato Wetu — Siku 10 kutoka Muhtasari hadi Uzinduzi | Kiganjani Co.",
    metaDesc: "Jinsi Kiganjani Co. inavyofanya kazi: mchakato uliopangwa wa siku 10 kutoka utangulizi hadi uzinduzi, na majengo tayari kwa M-Pesa kwa biashara za Tanzania.",
    eyebrow: "Mchakato",
    h1: "Siku 10 — kutoka muhtasari hadi uzinduzi.",
    intro: "Mtu mmoja, mchakato mmoja uliopangwa. Unajua kila wakati kinachofuata, unachopata katika kila hatua, na kinachohitajika kutoka kwako.",
    steps: [
      {
        n: "01",
        days: "Siku 1–2",
        title: "Ugunduzi na Mkakati",
        desc: "Tunabainisha malengo ya biashara yako, wateja unaowalenga, na ujumbe sahihi ambao tovuti yako inahitaji kutoa.",
        includes: ["Ramani ya malengo na hadhira", "Muhtasari wa kurasa (ramani ya tovuti)", "Mpango wa ujumbe na sehemu"],
      },
      {
        n: "02",
        days: "Siku 3–5",
        title: "Ubunifu na Maudhui",
        desc: "Mipangilio inayolingana na chapa na nakala iliyoandikwa kwa hadhira yako — bila maandishi ya kupalia wala mawazo ya jumla.",
        includes: ["Rasimu ya mpangilio kwa kila ukurasa", "Nakala iliyoandikwa kwa hadhira yako", "Raundi ya mapitio kabla ya ujenzi"],
      },
      {
        n: "03",
        days: "Siku 6–8",
        title: "Ujenzi na Mapitio",
        desc: "Tovuti inakamilika. Unakagua, unaomba mabadiliko, na tunaboresha hadi iwe sawa kabisa.",
        includes: ["Tovuti inayofanya kazi kwenye kiungo cha majaribio", "Malipo ya M-Pesa pale yanapohitajika", "Raundi mbili za mapitio zimejumuishwa"],
      },
      {
        n: "04",
        days: "Siku 9–10",
        title: "Uzinduzi na Ukabidhiano",
        desc: "Zindua tovuti kwenye domeni yako, elewa jinsi inavyofanya kazi, ikikuhudumia bila uangalizi wa kila siku.",
        includes: ["Uzinduzi kwenye domeni yako", "Maelezo ya ukabidhiano", "Masharti ya hifadhi na matengenezo"],
      },
    ],
    ctaTitle: "Uko tayari kuanza?",
    ctaBody: "Tuma ujumbe WhatsApp ukiwa na unachojenga — nitakujibu ndani ya masaa 24 na hatua zinazofuata.",
    scopeNote: "Ratiba hapo juu ni kwa tovuti za kawaida — biashara mtandaoni na programu maalum hufuata hatua nne zile zile, na ratiba maalum inayokubaliwa kabla hatujaanza.",
    calBtn: "Anza Project",
  },
  privacyPage: {
    metaTitle: "Sera ya Faragha — Kiganjani Co.",
    metaDesc: "Sera ya faragha ya huduma za Kiganjani Co.",
    h1: "Sera ya Faragha",
    updated: "Ilisasishwa mwisho: Septemba 2026",
    sections: [
      {
        h: "Taarifa Tunazokusanya",
        p: "Tunakusanya taarifa unazotoa moja kwa moja kupitia fomu yetu ya mawasiliano, ikiwemo jina lako, barua pepe, jina la biashara, namba ya simu, na maelezo ya mradi. Pia tunakusanya data za kawaida za takwimu za tovuti kama vile kurasa zilizotembelewa na vyanzo vya rufaa.",
      },
      {
        h: "Jinsi Tunavyotumia Taarifa Zako",
        p: "Tunatumia taarifa unazotoa kujibu maswali yako, kutoa huduma zetu, na kuboresha tovuti yetu. Hatuuzi, wala hatuhamishi taarifa zako binafsi kwa watu wengine.",
      },
      {
        h: "Uhifadhi wa Data",
        p: "Tunaihifadhi taarifa zako kwa muda unaohitajika tu kutimiza malengo ambayo ilikusanywa, au kama sheria inavyohitaji.",
      },
    ],
    contactH: "Wasiliana",
    contactA: "Kwa maswali kuhusu sera hii, tumia",
    contactLink: "fomu ya mawasiliano",
    contactB: "au barua pepe",
  },
  termsPage: {
    metaTitle: "Sheria na Masharti — Kiganjani Co.",
    metaDesc: "Sheria na masharti ya Kiganjani Co.",
    h1: "Sheria na Masharti",
    updated: "Ilisasishwa mwisho: Septemba 2026",
    sections: [
      {
        h: "Huduma",
        p: "Kiganjani Co. inatoa huduma za ubunifu wa tovuti, ujenzi wa biashara mtandaoni, na ujenzi wa programu za mtandao. Wigo, ratiba, na bei hukubaliwa kwa maandishi kabla ya kazi kuanza.",
      },
      {
        h: "Malipo",
        p: "Masharti ya malipo yameelezwa katika kila makubaliano ya mradi. Kazi kwa kawaida huanza baada ya kupokea amana, na salio linalobaki hulipwa mradi unapokamilika.",
      },
      {
        h: "Haki Miliki",
        p: "Baada ya malipo kamili, umiliki wa kazi iliyokamilika huhamia kwa mteja. Kiganjani Co. inabaki na haki ya kuonyesha kazi iliyokamilika kwenye jalada lake isipokuwa ikikubaliwa vinginevyo.",
      },
      {
        h: "Ukomo wa Dhima",
        p: "Hatuhusiki na hasara zisizo za moja kwa moja, za bahati mbaya, au zinazotokana na matumizi ya huduma zetu. Dhima yetu yote haitazidi kiasi kilicholipwa kwa huduma husika.",
      },
    ],
    contactH: "Wasiliana",
    contactA: "Kwa maswali kuhusu sheria hizi, tumia",
    contactLink: "fomu ya mawasiliano",
    contactB: "au barua pepe",
  },
  meta: {
    homeTitle: "Kiganjani Co. — Tovuti, Biashara Mtandaoni na Programu",
    homeDesc: "Wakala wa tovuti wa Dar es Salaam anayejenga tovuti za haraka, maduka ya mtandaoni yenye malipo ya M-Pesa na programu maalum kwa biashara za Tanzania.",
  },
  blogPage: {
    metaTitle: "Blogu — Kiganjani Co.",
    metaDesc: "Maarifa kuhusu ubunifu wa tovuti, biashara mtandaoni, na ukuaji wa kidijitali kwa biashara nchini Tanzania na Afrika Mashariki.",
    eyebrow: "Blogu",
    h1: "Maarifa na Miongozo",
    intro: "Ushauri wa vitendo kuhusu ubunifu wa tovuti, biashara mtandaoni, na kukuza biashara yako mtandaoni — umeandikiwa wajasiriamali na timu nchini Tanzania na Afrika Mashariki.",
    cardTitle: "Soma kwenye Hashnode",
    cardBody: "Makala zote zinachapishwa kwenye blogu yetu ya Hashnode. Tembelea kwa makala, miongozo, na uchambuzi wa kina wa kujenga uwepo wako wa kidijitali.",
    cta: "Tembelea Blogu",
  },
  casePage: {
    eyebrow: "Mfano wa kazi",
    categoryLabel: "Kundi",
    servicesLabel: "Huduma",
    processNote: "Imejengwa kwa mchakato ule ule wa hatua nne —",
    processLink: "ona jinsi unavyofanya kazi",
    relatedTitle: "Kazi zaidi",
    ctaTitle: "Unataka kitu kama hiki?",
    ctaBody: "Tuma ujumbe WhatsApp ukiwa na unachojenga — nitakujibu ndani ya masaa 24 na hatua zinazofuata.",
    calBtn: "Anza Project",
  },
  servicesPage: {
    metaTitle: "Huduma — Tovuti, Biashara Mtandaoni na Programu | Kiganjani Co.",
    metaDesc: "Kiganjani Co. inajenga nini: tovuti maalum kuanzia TZS 400,000, maduka ya mtandaoni tayari kwa M-Pesa, na programu maalum kwa biashara za Tanzania.",
    eyebrow: "Huduma",
    h1: "Ninachojenga.",
    intro: "Matoleo matatu, kiwango kimoja: haraka, yanayofanya kazi kwenye simu, na rahisi kutunza. Chagua linalolingana na biashara yako ilipo sasa.",
    services: [
      {
        slug: "websites",
        number: "01",
        title: "Tovuti",
        tagline: "Biashara yako, mtandaoni kwa siku 10.",
        body: [
          "Tovuti maalum inayojengwa kuzunguka chapa yako na kuandikiwa wateja wako — hadi kurasa tano zinazoeleza wewe ni nani, unatoa nini, na jinsi ya kukupata. Kila ukurasa unafanya kazi kwenye simu, unapakia haraka kwenye mitandao ya Tanzania, na una SEO ya eneo ili wateja wa Dar es Salaam wakupate na wawasiliane.",
          "Unapata domeni maalum .co.tz na barua pepe, mwaka 1 wa hifadhi na matengenezo, fomu ya mawasiliano pamoja na gumzo la WhatsApp, na maelezo ya ukabidhiano ili tovuti iendelee kufanya kazi bila uangalizi wa kila siku.",
        ],
        includes: [
          "Ubunifu maalum (hadi kurasa 5)",
          "Domeni maalum .co.tz + barua pepe",
          "Mwaka 1 wa hifadhi + matengenezo",
          "Fomu ya mawasiliano + WhatsApp",
          "Misingi ya SEO ya eneo",
          "Hai kwa siku 10",
        ],
        price: "kuanzia TZS 400,000",
        cta: "Anza mradi",
        ctaHref: "https://snippe.me/pay/website",
      },
      {
        slug: "ecommerce",
        number: "02",
        title: "Biashara Mtandaoni",
        tagline: "Uza mtandaoni kwa malipo ya M-Pesa.",
        body: [
          "Duka kamili la mtandaoni: orodha za bidhaa, kikapu na malipo kwa M-Pesa pamoja na kadi, pamoja na mifumo ya stoo, ufuatiliaji wa maagizo na punguzo katika mpangilio mmoja. Limejengwa kupunguza muda wa utoaji na kukuza mauzo ya kurudia kote Tanzania.",
          "Wateja hupata ankara kiotomatiki na arifa za barua pepe; wewe unapata duka unaloweza kuliendesha kutoka simuni. Linajumuisha kila kitu cha kifurushi cha Tovuti, na ratiba maalum inayokubaliwa kabla hatujaanza.",
        ],
        includes: [
          "Kila kitu cha Tovuti",
          "Malipo ya M-Pesa + kadi",
          "Mfumo wa kikapu na malipo",
          "Stoo, maagizo na punguzo",
          "Ankara kiotomatiki na arifa",
          "Ratiba maalum inayokubaliwa",
        ],
        price: "kuanzia TZS 1,800,000",
        cta: "Anza mradi",
        ctaHref: "https://form.jotform.com/262568319503562",
      },
      {
        slug: "webapps",
        number: "03",
        title: "Programu za Mtandao",
        tagline: "Programu inayolingana na uendeshaji wako.",
        body: [
          "Programu za mtandao zinazofanya kazi kwenye vifaa vyote, zilizojengwa kukidhi mahitaji ya biashara yako — kutoka zana za ndani hadi mifumo ya wateja. Ingizo salama na kujisajili, dashibodi shirikishi zinazoungwa mkono na hifadhidata halisi, mantiki ya biashara na ujumuishaji wa API, pamoja na paneli ya usimamizi ili usimamie watumiaji, maudhui na data mwenyewe.",
          "Kazi maalum huchukua muda mrefu kuliko tovuti ya kawaida: tunafuata mchakato ule ule wa hatua nne na wigo, bei na ratiba maalum zinazokubaliwa kwa maandishi kabla ya chochote kujengwa.",
        ],
        includes: [
          "Kila kitu cha Tovuti",
          "Uthibitishaji salama",
          "Dashibodi + hifadhidata",
          "Mantiki ya biashara na API",
          "Paneli ya usimamizi imejumuishwa",
          "Wigo, bei na ratiba maalum",
        ],
        price: "kuanzia TZS 3,200,000",
        cta: "Anza mradi",
        ctaHref: "https://form.jotform.com/262568319503562",
      },
    ],
    ctaTitle: "Huna uhakika kinachofaa?",
    ctaBody: "Tuma ujumbe WhatsApp ukiwa na unachojenga — nitakuelekeza kwenye kifurushi sahihi au bei maalum ndani ya masaa 24.",
    calBtn: "Anza Project",
  },
};

export const copy: Record<Lang, Copy> = { en, sw };
