# 🎬 CINEVERSE — The Cinematic Developer Portfolio Showcase

> A Hollywood / IMAX-style interactive portfolio engineered without React, Next.js, Tailwind CSS, or Supabase.

---

## 🌟 The Vision & Cinematic Experience

This project transforms your software engineering achievements, projects, and career milestones into a world-class cinematic streaming premiere platform (inspired by IMAX, A24, Apple TV+, and Dolby Cinema).

### 🎞️ Immersive Cinema Features:
1. **Cinema Mode**: Dims the theater room lighting, engages 2.39:1 widescreen anamorphic letterboxing, and triggers an authentic **THX-style "Deep Note"** sound sweep.
2. **Procedural Web Audio API Synthesizer (0 External Audio Files)**:
   - High-fidelity **Deep Note** harmonic sweep generated with detuned oscillators and biquad filters.
   - Interactive UI foley: shutter clicks, sub-bass whooshes, modal open chimes.
   - Optional **Vintage 35mm Projector Hum & 24 FPS shutter pulse** running directly in the browser.
3. **HTML5 Canvas Visual FX**:
   - **Volumetric Projector Light Beam**: Real-time atmospheric conical light shining onto the screen and tracking the cursor.
   - **Floating Dust Motes**: Particle system simulating theater dust motes illuminated by the projector beam.
   - **Procedural 35mm Film Grain Shader**: 24 FPS noise generator delivering analog film texture.
4. **Interactive Director's Screening Room**:
   - Live architectural pipeline telemetry simulator with dynamic timecode (`00:01:24:18`), stages, and live terminal logs.
   - Rotten Tomatoes & IMDb style ratings (e.g. 98% Fresh, 9.9 IMDb).
   - "PG-13: Contains High Performance, Clean Architecture, and Zero Technical Debt".
5. **Golden VIP Holographic Cinema Ticket Stub**:
   - Interactive Admit One ticket for hiring / booking interviews.
   - Barcode, tear-off perforation line, and realistic holographic foil shimmer on cursor movement.
   - Instant "Copy Email" and "Download Resume (CV)" actions.
6. **Vintage 35mm Countdown Intro**:
   - Classic circular film leader countdown (3... 2... 1... PREMIERE!) with audio sync.

---

## 🛠️ Tech Stack Diversity (Demonstrating Pure Engineering Mastery)

To prove versatility and stand out from generic templates:
- **Zero React / Next.js**: Built with modular, native ES6+ JavaScript modules.
- **Zero Tailwind CSS**: Built with a custom native CSS design system using CSS Custom Properties, CSS Grid, Subgrid, CSS 3D Perspective Transforms, and Glassmorphism.
- **Zero Supabase / Backend dependency**: Fully self-contained, lightning-fast, zero-friction client-side architecture.
- **Native Web Audio API**: Procedural sound synthesis in pure code.
- **HTML5 Canvas 2D / Volumetric Lighting Engine**: Hardware-accelerated particle and lighting rendering.

---

## 🚀 How to Run

### Method 1: Instant Direct Preview
Simply double-click `index.html` to open it in any modern browser!

### Method 2: Local HTTP Server (Node.js)
```bash
npm start
```
or:
```bash
npx serve -l 3000 .
```

### Method 3: Python Server
```bash
python -m http.server 3000
```
Then navigate to: `http://localhost:3000`

---

## 📂 Project Structure

```
job/
├── index.html                   # Main Cinema Showcase Document
├── package.json                 # Optional npm scripts
├── README.md                    # Documentation
├── css/
│   ├── base.css                 # Cinema Design Tokens, typography & resets
│   ├── cinema-effects.css       # Projector beam, film grain, letterbox & countdown
│   ├── components.css           # Navigation, Hero, Carousels, Modals & Reviews
│   ├── ticket.css               # Golden Holographic Ticket Stub styling
│   └── responsive.css           # Responsive breakpoints
└── js/
    ├── main.js                  # Application entrypoint & orchestration
    ├── data/
    │   └── movies.js            # Projects, Cast, Reviews & Filmography database
    ├── audio/
    │   └── sound-fx.js          # Web Audio API Synthesizer (Zero mp3 dependencies)
    ├── canvas/
    │   ├── projector-beam.js    # Volumetric projector cone & floating dust motes
    │   └── film-grain.js        # 24 FPS 35mm film grain canvas emulator
    └── components/
        ├── hero.js              # Featured Premiere marquee & trailers
        ├── carousel.js          # Netflix/Apple TV+ style 3D tilt carousels
        ├── movie-modal.js       # Screening room & architecture simulator
        ├── cinema-mode.js       # Cinema Mode & ambient audio controls
        └── ticket.js            # VIP Admit One hiring ticket
```

---

## ✏️ How to Add or Edit Your Own Projects

Open `js/data/movies.js`:
- Edit `PORTFOLIO_DIRECTOR` with your name, title, bio, and social links.
- Edit `MOVIES_DATABASE` with your projects (titles, synopses, tech stack cast, metrics, and live demo links).
- Edit `SKILLS_CAST` to customize your technical skill roles.
- Edit `CRITICS_REVIEWS` to add testimonials from your colleagues, managers, or clients.
- Edit `BOX_OFFICE_TIMELINE` with your career journey and achievements.
