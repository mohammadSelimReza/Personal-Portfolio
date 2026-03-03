# 🎨 Portfolio Design Guide — Selim Reza
> Stack: Next.js 14 (App Router) · Tailwind CSS · Framer Motion · TypeScript  
> Style: Glassmorphism · Motion UI · Dark Premium Aesthetic  
> Goal: Hired at a global company · Impress technical reviewers · Stand out visually

---

## 1. 🧠 Design Philosophy

This portfolio must communicate **three things in under 5 seconds**:
1. This engineer is **serious and senior-minded**
2. This is **not a template** — it has a unique identity
3. The work is **real, complex, and production-grade**

Every design decision must serve those three goals. No decoration for decoration's sake.

---

## 2. 🎨 Color System

```css
/* Base — Deep Space Dark */
--bg-primary:        #050810;   /* Page background */
--bg-secondary:      #0a0f1e;   /* Card/section background */
--bg-tertiary:       #0f1629;   /* Elevated surfaces */

/* Glass Layer */
--glass-bg:          rgba(255, 255, 255, 0.04);
--glass-border:      rgba(255, 255, 255, 0.08);
--glass-hover:       rgba(255, 255, 255, 0.07);

/* Accent — Electric Blue (Primary Brand Color) */
--accent-primary:    #3b82f6;   /* Blue-500 */
--accent-glow:       #1d4ed8;   /* Blue-700 for glow effects */
--accent-soft:       rgba(59, 130, 246, 0.15);

/* Accent — Cyan (Secondary) */
--accent-secondary:  #06b6d4;   /* Cyan-500 */
--accent-cyan-glow:  rgba(6, 182, 212, 0.2);

/* Text */
--text-primary:      #f1f5f9;   /* Near white */
--text-secondary:    #94a3b8;   /* Slate-400 */
--text-muted:        #475569;   /* Slate-600 */
--text-accent:       #60a5fa;   /* Blue-400 */

/* Status Colors */
--success:           #10b981;   /* Emerald */
--warning:           #f59e0b;   /* Amber */
```

**Rule:** Never use pure black (#000) or pure white (#fff). Always use the palette above.

---

## 3. 🔤 Typography System

```css
/* Font Stack */
--font-heading:  'Geist', 'Inter', sans-serif;       /* Main headings */
--font-body:     'Inter', system-ui, sans-serif;     /* Body text */
--font-mono:     'Geist Mono', 'Fira Code', monospace; /* Code, tech labels */

/* Scale */
--text-xs:    0.75rem;    /* 12px — labels, badges */
--text-sm:    0.875rem;   /* 14px — secondary text */
--text-base:  1rem;       /* 16px — body */
--text-lg:    1.125rem;   /* 18px — sub-headings */
--text-xl:    1.25rem;    /* 20px */
--text-2xl:   1.5rem;     /* 24px */
--text-3xl:   1.875rem;   /* 30px */
--text-4xl:   2.25rem;    /* 36px */
--text-5xl:   3rem;       /* 48px — hero heading */
--text-7xl:   4.5rem;     /* 72px — large display text */

/* Weight */
--font-normal:    400;
--font-medium:    500;
--font-semibold:  600;
--font-bold:      700;
--font-black:     900;   /* Hero name only */
```

**Heading Rule:** Hero name = 7xl + black weight + slight letter-spacing (-0.02em).  
**Body Rule:** Line height 1.7 for readability. Never go below 1.5.

---

## 4. 🪟 Glassmorphism System

Every card, panel, and modal uses this glass recipe:

```css
/* Standard Glass Card */
.glass-card {
  background:           rgba(255, 255, 255, 0.04);
  border:               1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter:      blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius:        16px;
}

/* Elevated Glass (modals, featured cards) */
.glass-elevated {
  background:           rgba(255, 255, 255, 0.07);
  border:               1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter:      blur(20px);
  border-radius:        20px;
  box-shadow:           0 8px 32px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255,255,255,0.1);
}

/* Hover State for all glass */
.glass-card:hover {
  background:           rgba(255, 255, 255, 0.07);
  border-color:         rgba(59, 130, 246, 0.3);
  box-shadow:           0 0 30px rgba(59, 130, 246, 0.1);
  transition:           all 0.3s ease;
}
```

**Glow Rule:** Blue glow on hover for interactive elements. Cyan glow for tech badges/tags.

---

## 5. ✨ Motion & Animation System

Use **Framer Motion** for all animations. Follow this hierarchy:

### 5.1 Page Load Sequence
```
1. Background particles/grid → fade in (0ms delay)
2. Nav bar → slide down (100ms delay)  
3. Hero text → stagger up, word by word (200ms delay)
4. Hero subtitle → fade up (600ms delay)
5. CTA buttons → fade + scale (800ms delay)
6. Scroll indicator → pulse (1200ms delay)
```

### 5.2 Scroll Animations (use Framer Motion `whileInView`)
```js
// Standard section entry
initial:   { opacity: 0, y: 40 }
animate:   { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }

// Card stagger (for grids of cards)
// Each card delayed by index * 0.1s

// Slide in from left (for timeline/experience)
initial:   { opacity: 0, x: -40 }
animate:   { opacity: 1, x: 0 }
```

### 5.3 Interactive Micro-animations
- **Buttons:** scale(1.03) on hover, scale(0.97) on click
- **Cards:** translateY(-4px) + glow on hover
- **Nav links:** underline slides in from left on hover
- **Tech badges:** slight scale + color brightening on hover
- **Cursor:** Custom cursor dot that follows mouse (optional but impactful)

### 5.4 Background Motion
Choose **ONE** of these for the hero background (don't combine):
- Option A: **Floating particle network** (tsparticles) — connected dots that react to mouse
- Option B: **Animated gradient mesh** — slow-moving aurora-like color blobs
- Option C: **Grid with glow** — subtle CSS grid with a radial glow at cursor position

> **Recommendation for Selim:** Option A (particle network) — fits the "systems/infrastructure" identity.

### 5.5 Animation Rules
- Max duration: **0.7s** for any single animation
- Ease: always `easeOut` or `easeInOut`, never linear
- **Never animate on every scroll tick** — only trigger once when element enters viewport
- Respect `prefers-reduced-motion` — disable animations for accessibility

---

## 6. 📐 Layout System

```
Max content width:  1200px
Section padding:    py-24 (96px top/bottom)
Card gap:           gap-6 (24px)
Mobile breakpoint:  640px
Tablet breakpoint:  768px  
Desktop:            1024px+
```

### Grid Patterns
```
Hero:           Full width, centered, 2-column on desktop (text + visual)
Experience:     Timeline layout (vertical line + alternating cards)
Projects:       3-column grid on desktop, 1-column on mobile
Skills:         Categorized badge clusters (not a plain list)
Contact:        Centered, single column, max-width 600px
```

---

## 7. 🧩 Component Specifications

### 7.1 Navigation
- Fixed top, full width
- Glass background on scroll (transparent when at top)
- Logo: `<SR />` monogram in monospace font, accent color
- Links: About · Experience · Projects · Skills · Contact
- CTA button: "Download CV" — outlined, glows on hover
- Mobile: hamburger → full-screen glass overlay menu

### 7.2 Hero Section
```
Layout: Two columns
Left:
  - "Hello, I'm" (sm, muted, mono font)
  - "Selim Reza" (7xl, bold, white)
  - "Backend Engineer · Systems Thinker" (2xl, accent blue, animated typing effect)
  - Short bio (2 lines max)
  - Two CTA buttons: "View My Work" (solid blue) + "Let's Talk" (glass outlined)
  - Social links row: GitHub · LinkedIn · Email

Right:
  - Terminal-style animated card showing a fake system status readout
    (e.g. services running, uptime, deployments — fits the SRE aspiration)
  - OR: Animated code snippet that types itself out
```

### 7.3 Experience Section
- **Vertical timeline** with a glowing blue line
- Each role = glass card floating off the timeline
- Company name + role in heading, period in mono font (muted)
- Bullet points as small rows with a `▸` icon
- Award badge (🏆) for the "Developer of the Quarter" entry — make it visually pop

### 7.4 Projects Section
- **Featured project** (Scan2Home or Phlebotomy) = large wide card at top
- Remaining projects = 3-column grid below
- Each card contains:
  - Project name (lg, bold)
  - One-line description
  - Tech stack badges (pill shape, cyan glow)
  - GitHub link icon (top right corner)
  - Subtle background: faint relevant icon or pattern at 5% opacity

### 7.5 Skills Section
- NOT a progress bar (progress bars are meaningless and look outdated)
- Grouped by category (Backend, DevOps, Database, etc.)
- Each skill = pill badge with the tech's brand color at low opacity
- On hover: badge glows in its brand color

### 7.6 "What's Next" / Goals Section
- Replicate the terminal/code block style from the README
- Animated typewriter effect revealing the goals one by one
- This section differentiates him — most portfolios don't have it

### 7.7 Contact Section
- Clean, minimal
- Large heading: "Let's Build Something."
- Sub-text: open to backend, DevOps, SRE roles
- Three action buttons: Email · LinkedIn · WhatsApp
- Each button = glass card with icon + label

---

## 8. 🏷️ Tech Badge Style

```css
/* Pill Badge */
.tech-badge {
  padding:          4px 12px;
  border-radius:    9999px;
  font-size:        0.75rem;
  font-family:      var(--font-mono);
  font-weight:      500;
  border:           1px solid rgba(6, 182, 212, 0.3);
  background:       rgba(6, 182, 212, 0.08);
  color:            #67e8f9;  /* cyan-300 */
  transition:       all 0.2s ease;
}

.tech-badge:hover {
  border-color:     rgba(6, 182, 212, 0.7);
  background:       rgba(6, 182, 212, 0.15);
  box-shadow:       0 0 12px rgba(6, 182, 212, 0.3);
}
```

---

## 9. 📦 Recommended Packages

```json
{
  "framer-motion":        "^11.x",   // All animations
  "tsparticles":          "^3.x",    // Hero background particles
  "@tsparticles/react":   "^3.x",
  "react-type-animation": "^3.x",    // Typing effect in hero
  "lucide-react":         "^0.x",    // Icons
  "next-themes":          "^0.x",    // If adding light/dark toggle
  "clsx":                 "^2.x",    // Conditional classnames
  "tailwind-merge":       "^2.x"     // Merge tailwind classes safely
}
```

---

## 10. 📁 Recommended File Structure

```
/app
  /page.tsx                  ← Main page (assembles all sections)
  /layout.tsx                ← Font loading, metadata, theme
/components
  /ui
    GlassCard.tsx            ← Reusable glass card wrapper
    TechBadge.tsx            ← Reusable tech pill badge
    SectionHeading.tsx       ← Consistent section title style
    AnimatedText.tsx         ← Framer Motion text wrapper
  /sections
    Hero.tsx
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Goals.tsx
    Contact.tsx
  /layout
    Navbar.tsx
    Footer.tsx
    ParticleBackground.tsx
/lib
  data.ts                    ← All content data (projects, skills, experience)
  constants.ts               ← Colors, breakpoints
/public
  /icons                     ← Tech SVG icons
  selim-cv.pdf               ← Downloadable CV
```

---

## 11. ⚡ Performance Rules

- Use `next/image` for ALL images — never raw `<img>`
- Lazy load everything below the fold with `loading="lazy"`
- Keep hero bundle under 200kb JS
- Particle animation: pause when tab is not focused
- Font: use `next/font` to load Inter/Geist — zero layout shift
- Animations: use `will-change: transform` only on actively animating elements

---

## 12. 📱 Mobile Rules

- Hero: single column, text centered, remove right-side terminal card
- Navigation: hamburger → full-screen glass overlay
- Projects: single column scroll
- Timeline: left-aligned (remove alternating layout)
- All touch targets: minimum 44×44px
- Particle background: reduce particle count by 70% on mobile (performance)

---

## 13. ✅ Quality Checklist (Before Launch)

- [ ] Lighthouse score ≥ 90 on Performance, Accessibility, SEO
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Every project links to a real GitHub repo
- [ ] CV PDF is downloadable and up to date
- [ ] Meta tags: title, description, og:image (for LinkedIn sharing)
- [ ] Mobile tested on real device (not just browser DevTools)
- [ ] No `console.error` warnings in production
- [ ] All glass cards readable — check contrast ratio ≥ 4.5:1

---

*This guide is the single source of truth for all design decisions.  
When in doubt: dark, minimal, purposeful, and fast.*