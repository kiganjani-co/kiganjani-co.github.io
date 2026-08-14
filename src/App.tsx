import { useState, useEffect, useRef } from "react"
import { Analytics } from "@vercel/analytics/next"
import logo from "./imports/Simple-transparent.png"
import williamPhoto from "./imports/annotation-reference.jpeg"

// ── Theme ─────────────────────────────────────────────────────
const lightC = {
  canvas:    "#ffffff",
  canvasMid: "#f5f5f5",
  canvasCard:"#f0f0f0",
  fg:        "#000000",
  fgDim:     "rgba(0,0,0,0.55)",
  rule:      "rgba(0,0,0,0.08)",
  navBg:     "rgba(255,255,255,0.95)",
  overlayBg: "rgba(255,255,255,0.99)",
  captionBg: "rgba(255,255,255,0.95)",
  cardHover: "#ebebeb",
  inputBg:   "rgba(0,0,0,0.04)",
}
const darkC = {
  canvas:    "#000000",
  canvasMid: "#0a0a0a",
  canvasCard:"#0f0f0f",
  fg:        "#ffffff",
  fgDim:     "rgba(255,255,255,0.55)",
  rule:      "rgba(255,255,255,0.08)",
  navBg:     "rgba(0,0,0,0.92)",
  overlayBg: "rgba(0,0,0,0.98)",
  captionBg: "rgba(0,0,0,0.90)",
  cardHover: "#141414",
  inputBg:   "rgba(255,255,255,0.04)",
}
const teal = "#00d2b5"
const mint = "#06ffdd"
const display = "'Fraunces', Georgia, serif"
const body    = "'Outfit', system-ui, sans-serif"

type C = typeof lightC

const NAV_LINKS = ["Services", "Work", "About", "Process", "Contact"]

const SERVICES = [
  { number: "01", title: "Website Design",      description: "Bespoke websites built around your brand. Clean, fast, and crafted to convert visitors into clients." },
  { number: "02", title: "E-Commerce Platform", description: "End-to-end online stores — product listings, inventory, orders, and payments in one coherent system." },
  { number: "03", title: "Internet Marketing",  description: "Search, social, and email working in concert. Organic strategies that compound over time." },
]

const PROJECTS = [
  {
    id: "01", category: "Website Design", title: "Placeholder Project Title",
    description: "A brief description of the project, what the client needed, and the outcome delivered. Replace with your real case study.",
    tags: ["Branding", "Web Design", "SEO"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "02", category: "E-Commerce", title: "Placeholder Project Title",
    description: "A brief description of the e-commerce solution built, the problem solved, and measurable results achieved.",
    tags: ["E-Commerce", "Payments", "Inventory"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "03", category: "Internet Marketing", title: "Placeholder Project Title",
    description: "Growth campaign across search and social. Describe the strategy, channels used, and growth achieved for the client.",
    tags: ["Social Media", "Email", "SEO"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop&auto=format",
  },
]

const STATS = [
  { value: "30",   unit: "days",  label: "from brief to live site" },
  { value: "100%", unit: "",      label: "remote — anywhere in East Africa" },
  { value: "1",    unit: "owner", label: "direct access, no middlemen" },
]

// ── Sun / Moon icons ──────────────────────────────────────────
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const [scrollY, setScrollY]   = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark]         = useState(false)

  const c = dark ? darkC : lightC

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Sync body bg so no flash at edges
  useEffect(() => {
    document.body.style.backgroundColor = c.canvas
    document.body.style.color = c.fg
  }, [dark])

  const navOpaque = scrollY > 60

  return (
    <div style={{ backgroundColor: c.canvas, color: c.fg, fontFamily: body, transition: "background-color 0.3s, color 0.3s" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "0 clamp(1.5rem, 5vw, 4rem)", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backgroundColor: navOpaque ? c.navBg : "transparent",
        backdropFilter: navOpaque ? "blur(12px)" : "none",
        borderBottom: navOpaque ? `1px solid ${c.rule}` : "none",
        transition: "background-color 0.3s, border-color 0.3s",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logo}
            alt="Kiganjani Co."
            style={{ height: "40px", width: "auto", filter: dark ? "invert(1)" : "none", transition: "filter 0.3s" }}
          />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hide-mobile">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: c.fgDim, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.fg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = c.fgDim)}
            >{l}</a>
          ))}

          {/* Dark mode toggle */}
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode"
            style={{ background: "none", border: `1px solid ${c.rule}`, borderRadius: "2px", cursor: "pointer", padding: "0.4rem 0.55rem", color: c.fgDim, display: "flex", alignItems: "center", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = teal; e.currentTarget.style.color = teal }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.rule; e.currentTarget.style.color = c.fgDim }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="mailto:kiganjani.co@gmail.com"
            style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.06em", color: c.canvas, backgroundColor: teal, padding: "0.5rem 1.25rem", borderRadius: "2px", textDecoration: "none", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = mint)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = teal)}
          >Get in touch</a>
        </div>

        {/* Mobile row: toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="show-mobile">
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode"
            style={{ background: "none", border: `1px solid ${c.rule}`, borderRadius: "2px", cursor: "pointer", padding: "0.35rem 0.5rem", color: c.fgDim, display: "flex", alignItems: "center" }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem" }} aria-label="Toggle menu">
            <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", height: "1.5px", backgroundColor: c.fg, transformOrigin: "center",
                  transform: menuOpen && i === 0 ? "translateY(6.5px) rotate(45deg)" : menuOpen && i === 1 ? "scaleX(0)" : menuOpen && i === 2 ? "translateY(-6.5px) rotate(-45deg)" : "none",
                  transition: "transform 0.25s",
                }} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, backgroundColor: c.overlayBg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem" }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: display, fontSize: "2.5rem", color: c.fg, textDecoration: "none" }}>{l}</a>
          ))}
          <a href="mailto:kiganjani.co@gmail.com" onClick={() => setMenuOpen(false)}
            style={{ fontSize: "0.9rem", letterSpacing: "0.12em", color: teal, textDecoration: "none", marginTop: "1rem" }}>
            kiganjani.co@gmail.com
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "grid", alignItems: "center", padding: "clamp(6rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vh, 6rem)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10vh", right: "-10vw", width: "60vw", height: "60vh", background: "radial-gradient(ellipse at center, rgba(0,210,181,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "920px", position: "relative" }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: "0.24em", textTransform: "uppercase", color: teal, marginBottom: "2rem", fontWeight: 500 }}>
            Dar es Salaam, Tanzania — Digital Agency
          </p>
          <h1 style={{ fontFamily: display, fontSize: "clamp(2.8rem, 8vw, 6.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: c.fg, marginBottom: "2.5rem" }}>
            Your business,<br />
            <em style={{ fontStyle: "italic", color: teal }}>online</em> and growing.
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.8, color: c.fgDim, maxWidth: "500px", marginBottom: "3rem" }}>
            Kiganjani Co. handles the technical complexity of going online — so you can focus on running your business. Websites, stores, and marketing that actually work.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <a href="#contact"
              style={{ display: "inline-block", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: c.canvas, backgroundColor: teal, padding: "0.9rem 2rem", textDecoration: "none", borderRadius: "2px", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = mint)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = teal)}
            >Start a project</a>
            <a href="#work"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: c.fgDim, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.fg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = c.fgDim)}
            >
              See work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${c.rule}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: teal, marginBottom: "1rem" }}>What we do</p>
            <h2 style={{ fontFamily: display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: c.fg, lineHeight: 1.1 }}>Services</h2>
          </div>
          <p style={{ fontSize: "0.9rem", color: c.fgDim, maxWidth: "340px", lineHeight: 1.75 }}>
            Minimalist design principles, open-source technology, and organic growth strategies.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1px", backgroundColor: c.rule }}>
          {SERVICES.map((svc) => <ServiceCard key={svc.number} {...svc} c={c} />)}
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: "clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${c.rule}`, backgroundColor: c.canvasMid }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: teal, marginBottom: "1rem" }}>Case studies</p>
            <h2 style={{ fontFamily: display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: c.fg, lineHeight: 1.1 }}>Selected work</h2>
          </div>
          <p style={{ fontSize: "0.9rem", color: c.fgDim, maxWidth: "340px", lineHeight: 1.75 }}>
            Projects that moved the needle — from first website to full digital operations.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {PROJECTS.map((project) => <ProjectCard key={project.id} {...project} c={c} />)}
        </div>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", color: c.fgDim, letterSpacing: "0.06em" }}>
            More projects available on request —{" "}
            <a href="mailto:kiganjani.co@gmail.com" style={{ color: teal, textDecoration: "none" }}>get in touch</a>
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessJourney c={c} />

      {/* ── STATS ── */}
      <section id="stats" style={{ padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${c.rule}`, backgroundColor: c.canvasMid }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0", justifyContent: "space-around" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ flex: "1 1 180px", textAlign: "center", padding: "1.5rem 1rem", borderRight: i < STATS.length - 1 ? `1px solid ${c.rule}` : "none" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.4rem" }}>
                <span style={{ fontFamily: display, fontSize: "2.5rem", fontWeight: 300, color: c.fg }}>{s.value}</span>
                {s.unit && <span style={{ fontSize: "0.7rem", color: teal, letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.unit}</span>}
              </div>
              <p style={{ fontSize: "0.75rem", color: c.fgDim, marginTop: "0.4rem", letterSpacing: "0.04em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${c.rule}` }}>
        <div className="about-grid">
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: "-12px 12px 12px -12px", border: `1px solid rgba(0,210,181,0.35)`, borderRadius: "2px", pointerEvents: "none" }} />
            <img
              src={williamPhoto}
              alt="William Balaile, founder of Kiganjani Co."
              style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "2px", display: "block", backgroundColor: "#ccc" }}
            />
            <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", backgroundColor: c.captionBg, backdropFilter: "blur(8px)", padding: "0.75rem 1.25rem", borderLeft: `2px solid ${teal}` }}>
              <p style={{ fontFamily: display, fontSize: "1rem", fontWeight: 400, color: c.fg }}>William Balaile</p>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", color: teal, textTransform: "uppercase", marginTop: "0.2rem" }}>Founder & Digital Strategist</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: teal, marginBottom: "1.5rem" }}>About</p>
            <h2 style={{ fontFamily: display, fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 400, color: c.fg, lineHeight: 1.2, marginBottom: "1.75rem" }}>
              One person.<br />Full accountability.
            </h2>
            <p style={{ fontSize: "1rem", color: c.fgDim, lineHeight: 1.85, marginBottom: "1.25rem" }}>
              I'm William — the person who answers your messages, builds your site, and thinks about your growth. No account managers. No offshore handoffs. When you work with Kiganjani Co., you work with me directly.
            </p>
            <p style={{ fontSize: "1rem", color: c.fgDim, lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Based in Dar es Salaam, I've helped businesses across East Africa establish their digital presence and grow it with intention — not noise.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "clamp(4rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${c.rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: teal, marginBottom: "1.5rem" }}>Start a project</p>
            <h2 style={{ fontFamily: display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, color: c.fg, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Let's get your business online.
            </h2>
            <p style={{ fontSize: "1rem", color: c.fgDim, lineHeight: 1.85, marginBottom: "2.5rem" }}>
              Tell me what you're building. I'll come back within 24 hours with how I can help and what it'll take to get there.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: "✉", label: "Email",            value: "kiganjani.co@gmail.com", href: "mailto:kiganjani.co@gmail.com" },
                { icon: "✆", label: "Phone / WhatsApp", value: "+255 782 506 217",      href: "tel:+255782506217" },
                { icon: "⊕", label: "Instagram",        value: "@kiganjani.co",         href: "https://instagram.com/kiganjani.co" },
              ].map((ct) => (
                <a key={ct.label} href={ct.href}
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", padding: "1rem", border: `1px solid ${c.rule}`, borderRadius: "2px", transition: "border-color 0.2s, background-color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,210,181,0.4)"; e.currentTarget.style.backgroundColor = "rgba(0,210,181,0.05)" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = c.rule; e.currentTarget.style.backgroundColor = "transparent" }}
                >
                  <span style={{ width: "36px", height: "36px", backgroundColor: "rgba(0,210,181,0.1)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: teal, flexShrink: 0 }}>{ct.icon}</span>
                  <div>
                    <p style={{ fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: c.fgDim, marginBottom: "0.2rem" }}>{ct.label}</p>
                    <p style={{ fontSize: "0.9rem", color: c.fg }}>{ct.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <ContactForm c={c} />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "clamp(2rem, 4vh, 3rem) clamp(1.5rem, 5vw, 4rem)", borderTop: `1px solid ${c.rule}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={logo} alt="Kiganjani Co." style={{ height: "28px", width: "auto", filter: dark ? "invert(1)" : "none", transition: "filter 0.3s" }} />
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: teal, display: "inline-block" }} />
          <span style={{ fontSize: "0.72rem", color: c.fgDim }}>Dar es Salaam, Tanzania</span>
        </div>
        <p style={{ fontSize: "0.72rem", color: c.fgDim }}>© {new Date().getFullYear()} Kiganjani Technologies Co. All rights reserved.</p>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 641px) {
          .show-mobile { display: none !important; }
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        #stats > div > div:last-child { border-right: none !important; }
        @media (max-width: 600px) {
          #stats > div > div { border-right: none !important; border-bottom: 1px solid; }
        }
      `}</style>
    </div>
  )
}

// ── Process Journey (scroll-driven) ──────────────────────────
const STEPS = [
  { phase: "Step 1", title: "Discovery & Strategy", desc: "We map your business goals, target clients, and the exact message your site needs to communicate.", icon: "◎" },
  { phase: "Step 2", title: "Design & Content",     desc: "Brand-aligned layouts and copy written for your audience — no lorem ipsum, no placeholder thinking.",   icon: "◈" },
  { phase: "Step 3", title: "Build & Review",        desc: "The site comes together. You review, request changes, and we refine until it's exactly right.",        icon: "◇" },
  { phase: "Step 4", title: "Launch & Handover",     desc: "Launch the site on your domain, understand on how it runs, working for you without daily upkeep",      icon: "◉" },
]

// Marker coordinates for the snake path (viewBox 0 0 100 100)
const SNAKE_PATH =
  "M 12 30 C 20 30, 25 70, 37 70 C 49 70, 51 30, 63 30 C 75 30, 80 70, 88 70"
const SNAKE_POINTS = [
  { x: 12, y: 30 },
  { x: 37, y: 70 },
  { x: 63, y: 30 },
  { x: 88, y: 70 },
]

function ProcessJourney({ c }: { c: C }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const pathRef  = useRef<SVGPathElement>(null)
  const [progress, setProgress] = useState(0)               // 0-1 scroll progress
  const [pathLen, setPathLen]   = useState(1000)            // snake path length
  const [fractions, setFractions] = useState<number[]>([0, 0.34, 0.67, 1]) // marker position along path (0-1)

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current
      if (!el) return
      const rect  = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      setProgress(total > 0 ? Math.min(1, scrolled / total) : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Measure the path once so the draw tip stays in sync with the markers
  useEffect(() => {
    const p = pathRef.current
    if (!p) return
    const L = p.getTotalLength()
    setPathLen(L)
    const fr = SNAKE_POINTS.map((pt) => {
      let best = 0
      let bestDist = Infinity
      for (let i = 0; i <= 200; i++) {
        const f = i / 200
        const c = p.getPointAtLength(f * L)
        const d = (c.x - pt.x) ** 2 + (c.y - pt.y) ** 2
        if (d < bestDist) { bestDist = d; best = f }
      }
      return best
    })
    setFractions(fr)
  }, [])

  const n = STEPS.length
  const revealedCount = fractions.reduce((acc, f) => acc + (progress >= f ? 1 : 0), 0)
  const pct = Math.min(100, (progress * (n + 0.8)) / n * 100)
  const draw = pathLen * (1 - Math.min(1, Math.max(0, progress)))

  return (
    <div ref={outerRef} id="process" style={{ height: `${STEPS.length * 90 + 60}vh`, position: "relative", borderTop: `1px solid ${c.rule}` }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", backgroundColor: c.canvas, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 5vw, 4rem)", overflow: "hidden" }}>

        {/* Header */}
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: teal, marginBottom: "0.6rem" }}>How it works</p>
        <h2 style={{ fontFamily: display, fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, color: c.fg, lineHeight: 1.1, marginBottom: "clamp(1.5rem, 3vh, 2.5rem)" }}>
          Online in 30 days — <em style={{ fontStyle: "italic", color: teal }}>guaranteed.</em>
        </h2>

        {/* Snake: line + markers + cards */}
        <div className="snake-wrap" style={{ ["--snake-pct" as any]: `${pct}%` }}>

          <svg className="snake-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {/* base track */}
            <path
              d={SNAKE_PATH}
              fill="none" stroke={c.rule} strokeWidth="1.6"
              vectorEffect="non-scaling-stroke" strokeLinecap="round"
            />
            {/* drawing tip */}
            <path
              ref={pathRef}
              d={SNAKE_PATH}
              fill="none" stroke={teal} strokeWidth="1.6"
              vectorEffect="non-scaling-stroke" strokeLinecap="round"
              style={{ strokeDasharray: pathLen, strokeDashoffset: draw }}
            />
          </svg>

          {STEPS.map((step, i) => {
            const pt   = SNAKE_POINTS[i]
            const above = i % 2 === 0
            const visible = progress >= fractions[i]
            return (
              <div key={step.phase} className="snake-step">
                {/* Numbered circular marker */}
                <div className="snake-marker" style={{ left: `${pt.x}%`, top: `${pt.y}%` }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    backgroundColor: visible ? teal : c.canvas,
                    border: `2px solid ${visible ? teal : c.rule}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.75rem", fontWeight: 600, color: visible ? c.canvas : c.fgDim,
                    transition: "background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease",
                    fontFamily: display,
                  }}>
                    {i + 1}
                  </div>
                </div>

                {/* Step card — anchored directly above/below its marker, clear of the line */}
                <div className="snake-card" style={{
                  left: `${pt.x}%`,
                  top: `${pt.y}%`,
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? `translate(-50%, ${above ? "calc(-100% - 1.5rem)" : "1.5rem"})`
                    : `translate(-50%, ${above ? "calc(-100% - 2rem)" : "2rem"})`,
                  transition: "opacity 0.45s ease, transform 0.45s ease",
                  transitionDelay: visible ? "0.08s" : "0s",
                }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: "0.35rem" }}>{step.phase}</p>
                  <h3 style={{ fontFamily: display, fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", fontWeight: 400, color: c.fg, marginBottom: "0.45rem", lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontSize: "0.75rem", color: c.fgDim, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Step counter */}
        <p style={{ marginTop: "clamp(1.25rem, 2.5vh, 2rem)", fontSize: "0.7rem", color: c.fgDim, letterSpacing: "0.1em" }}>
          <span style={{ color: teal, fontFamily: display, fontSize: "1rem" }}>{revealedCount}</span>
          {" / "}{n} steps
        </p>
      </div>

      <style>{`
        .snake-wrap {
          position: relative;
          width: 100%;
          height: clamp(360px, 58vh, 640px);
        }
        .snake-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .snake-step { position: absolute; inset: 0; }
        .snake-marker { position: absolute; transform: translate(-50%, -50%); z-index: 2; }
        .snake-card {
          position: absolute;
          max-width: 210px;
          text-align: center;
        }
        @media (max-height: 780px) {
          .snake-card { max-width: 185px; }
          .snake-card p { font-size: 0.7rem !important; line-height: 1.5 !important; }
          .snake-card h3 { font-size: 0.95rem !important; }
        }

        @media (max-width: 860px) {
          .snake-svg { display: none; }
          .snake-wrap {
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            height: auto;
            padding-left: 1.5rem;
          }
          .snake-wrap::before {
            content: "";
            position: absolute;
            left: 17px; top: 0; bottom: 0;
            width: 2px;
            background: ${c.rule};
          }
          .snake-wrap::after {
            content: "";
            position: absolute;
            left: 17px; top: 0;
            width: 2px; height: var(--snake-pct);
            background: ${teal};
            border-radius: 2px;
            transition: height 0.3s ease;
          }
          .snake-step {
            position: relative;
            inset: auto;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }
          .snake-marker { position: relative; left: auto !important; top: auto !important; transform: none; margin-top: 0.15rem; }
          .snake-card {
            position: relative;
            left: auto !important; top: auto !important; bottom: auto !important;
            transform: none !important;
            text-align: left;
            max-width: none;
            flex: 1;
          }
        }
      `}</style>
    </div>
  )
}

// ── Service Card ──────────────────────────────────────────────
function ServiceCard({ number, title, description, c }: { number: string; title: string; description: string; c: C }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ padding: "2.5rem 2rem", backgroundColor: hovered ? c.cardHover : c.canvas, transition: "background-color 0.25s", cursor: "default" }}>
      <p style={{ fontFamily: display, fontSize: "0.72rem", color: teal, marginBottom: "1.5rem", letterSpacing: "0.06em" }}>{number}</p>
      <h3 style={{ fontFamily: display, fontSize: "1.35rem", fontWeight: 400, color: c.fg, marginBottom: "0.9rem", lineHeight: 1.2 }}>{title}</h3>
      <p style={{ fontSize: "0.875rem", color: c.fgDim, lineHeight: 1.8 }}>{description}</p>
      <div style={{ marginTop: "2rem", width: hovered ? "48px" : "20px", height: "1.5px", backgroundColor: teal, transition: "width 0.3s ease" }} />
    </div>
  )
}

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ id, category, title, description, tags, image, c }: { id: string; category: string; title: string; description: string; tags: string[]; image: string; c: C }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", backgroundColor: hovered ? c.cardHover : c.canvasMid, transition: "background-color 0.3s", cursor: "default" }}>
      <div style={{ overflow: "hidden", height: "280px", backgroundColor: "#888" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }} />
      </div>
      <div style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "0.62rem", color: teal, letterSpacing: "0.18em", textTransform: "uppercase" }}>{category}</span>
          <span style={{ fontSize: "0.65rem", color: c.fgDim, fontFamily: display }}>{id}</span>
        </div>
        <h3 style={{ fontFamily: display, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 400, color: c.fg, marginBottom: "1rem", lineHeight: 1.2 }}>{title}</h3>
        <p style={{ fontSize: "0.875rem", color: c.fgDim, lineHeight: 1.8, marginBottom: "1.75rem" }}>{description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: teal, border: `1px solid rgba(0,210,181,0.3)`, borderRadius: "2px", padding: "0.3rem 0.65rem" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Contact Form ──────────────────────────────────────────────
function ContactForm({ c }: { c: C }) {
  const [form, setForm] = useState({ name: "", business: "", message: "" })
  const [sent, setSent] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: "100%", backgroundColor: c.inputBg, border: `1px solid ${c.rule}`,
    borderRadius: "2px", padding: "0.85rem 1rem", color: c.fg, fontSize: "0.9rem",
    fontFamily: body, outline: "none", transition: "border-color 0.2s",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${form.name}${form.business ? ` — ${form.business}` : ""}`)
    const body2 = encodeURIComponent(form.message)
    window.location.href = `mailto:kiganjani.co@gmail.com?subject=${subject}&body=${body2}`
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ padding: "3rem 2rem", border: `1px solid rgba(0,210,181,0.3)`, borderRadius: "2px", textAlign: "center" }}>
        <p style={{ fontFamily: display, fontSize: "1.5rem", color: c.fg, marginBottom: "0.75rem" }}>Message ready.</p>
        <p style={{ fontSize: "0.875rem", color: c.fgDim }}>Your mail client should have opened. Alternatively, reach me directly at kiganjani.co@gmail.com</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: c.fgDim, marginBottom: "0.5rem" }}>Your name</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle} placeholder="Jane Doe"
            onFocus={(e) => (e.target.style.borderColor = "rgba(0,210,181,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = c.rule)} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: c.fgDim, marginBottom: "0.5rem" }}>Business name</label>
          <input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
            style={inputStyle} placeholder="Optional"
            onFocus={(e) => (e.target.style.borderColor = "rgba(0,210,181,0.5)")}
            onBlur={(e) => (e.target.style.borderColor = c.rule)} />
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: c.fgDim, marginBottom: "0.5rem" }}>Tell me about your project</label>
        <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: "vertical" }} placeholder="What does your business do? What are you hoping to achieve online?"
          onFocus={(e) => (e.target.style.borderColor = "rgba(0,210,181,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = c.rule)} />
      </div>
      <button type="submit"
        style={{ width: "100%", padding: "1rem", backgroundColor: teal, color: c.canvas, border: "none", borderRadius: "2px", fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: body, transition: "background-color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = mint)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = teal)}
      >Send enquiry</button>
    </form>
  )
}
