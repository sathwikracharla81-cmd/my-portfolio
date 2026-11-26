# Sathwik Racharla — Interactive 3D Portfolio

> An interactive 3D portfolio and miniature exploration world inspired by Bruno Simon's portfolio concept, engineered with Three.js, WebGL, Web Audio API, and modern responsive web standards.

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?logo=github)](https://sathwikracharla81-cmd.github.io/my-portfolio/)
[![Three.js](https://img.shields.io/badge/Three.js-r128-black?logo=three.js)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🌟 Overview & Design Concept

This portfolio reimagines the conventional scrolling developer portfolio as an **immersive, low-poly 3D world** where visitors control a miniature cyber rover to explore six distinct interactive landmarks, corresponding exactly to the six rubric sections:

1. **About Me (`#about`)** — The story behind the journey, growing up in Vemulawada, Telangana, and studying through government schooling to Newton School of Technology.
2. **Education (`#education`)** — Academic milestones: Class 10 (9.7 CGPA), Class 12 (978/1000), JEE (85.978 percentile), and current B.Tech in CSE at Newton School of Technology.
3. **Achievements (`#achievements`)** — First Prize Winner on the Gemma Track at the national Hacktoberfest Hackathon (₹12,000 prize) with Team AMENDMENT.
4. **Featured Projects (`#projects`)** — In-depth architectural breakdown of **AMENDMENT** (board game with local Gemma AI Court and deterministic rule engine) and **S&AI Open-Source Contributions** (`S-AI-Projects/gitignore`).
5. **Skills & Toolkit (`#skills`)** — Transparent proficiency breakdown across Python, Git & GitHub, Backend Development (FastAPI), Game Engine Logic, Three.js & WebGL, and Problem Solving.
6. **Contact & Connect (`#contact`)** — Direct links to GitHub profile, email, and LinkedIn.

> **Note on Originality:** While inspired by Bruno Simon's vehicle exploration interaction concept, all 3D geometry, low-poly procedural landmarks, shaders, audio synthesis, and visual identities are **100% original custom code and assets**.

---

## 🎮 Interactive Features & Controls

| Input | Action |
|---|---|
| **W / Up Arrow** | Accelerate forward |
| **S / Down Arrow** | Reverse / Brake |
| **A / D / Left / Right** | Steer Left / Right |
| **SPACEBAR** | Handbrake & Drift (triggers tire skid physics) |
| **R** | Reset vehicle to Central Plaza |
| **Mouse Drag** | 360° Orbit camera view |
| **Mouse Wheel** | Zoom in / Zoom out |
| **ENTER / E** | Open landmark interaction modal |
| **ESC** | Close modal / return to driving |
| **Touchscreen** | Virtual analog joystick + Accelerate / Brake / Action touch buttons |

### Utility & Accessibility Toggles (HUD)
- **⚡ Quick-Warp Navigation:** Click any of the 6 section pills in the top header to glide the camera and car directly to that destination.
- **🔊 Synthesized Web Audio:** Realistic procedural engine rumble and drift screech generated directly via the Web Audio API without external audio file dependencies.
- **☀️ / 🌅 / 🌙 Time-of-Day:** Toggle between Sunny Day, Golden Hour Sunset, and Cyber Night with glowing headlights.
- **⚡ / 🔋 Graphics Quality:** High-performance mode for weaker mobile hardware.
- **📜 Classic Reader Mode:** Full, accessible static layout designed for keyboard screen readers or environments without WebGL acceleration.

---

## 🚀 Featured Projects

### 1. AMENDMENT — The Board Game That Rewrites Its Own Rules
- **Recognition:** 1st Prize — Hacktoberfest Hackathon (Gemma Track · ₹12,000)
- **Role:** Backend Development and Game Engine Architecture
- **Tech Stack:** FastAPI, Python, Local Gemma via Ollama, REST APIs
- **Key Architecture:**
  - **Deterministic Game Engine:** Engineered a state machine that evaluates game triggers (`on_turn_start`, `on_roll`, `on_land`, `on_pass`) and executes rule effects deterministically.
  - **AI Court Decoupling:** The Court (Gemma via Ollama) parses natural-language English proposals and outputs structured rule JSON adhering to strict schemas. The Court never directly mutates game state variables.
  - **Rulebook Integrity & Immutability:** Safeguarded core rules (such as R2) from paradoxical or game-breaking modifications.

---

### 2. S&AI Open-Source Contributions (`S-AI-Projects/gitignore`)
Contributed to the upstream [S-AI-Projects/gitignore](https://github.com/S-AI-Projects/gitignore) repository across 10 specialized engineering tasks, designing automated Python regression suites, proving Git ignore semantics, and testing cross-platform assumptions.

#### All 10 Pull Requests (Verified on GitHub)

| Task ID | PR Link & Exact Title | Template | Test Evidence | PR Status |
|---|---|---|---|---|
| **R46-T001** | [#91: Prove what the template ignores](https://github.com/S-AI-Projects/gitignore/pull/91) | `Dart.gitignore` | `14/14 checks passed` | **Open** |
| **R46-T002** | [#92: Explain nested path matching](https://github.com/S-AI-Projects/gitignore/pull/92) | `Global/EiffelStudio.gitignore` | `19/19 checks passed` | **Open** |
| **R46-T003** | [#93: Demonstrate negation order](https://github.com/S-AI-Projects/gitignore/pull/93) | `Global/Ninja.gitignore` | `15/15 checks passed` | **Open** |
| **R46-T004** | [#94: Distinguish directories from files](https://github.com/S-AI-Projects/gitignore/pull/94) | `Lilypond.gitignore` | `27/27 checks passed` | **Open** |
| **R46-T005** | [#95: Explain already-tracked files](https://github.com/S-AI-Projects/gitignore/pull/95) | `ModelSim.gitignore` | `All checks passed` | **Open** |
| **R46-T006** | [#96: Check path and case assumptions](https://github.com/S-AI-Projects/gitignore/pull/96) | `Modelica.gitignore` | `11/11 checks passed` | **Open** |
| **R46-T007** | [#97: Document the pattern's origin](https://github.com/S-AI-Projects/gitignore/pull/97) | `Global/Virtuoso.gitignore` | `12/12 checks passed` | **Open** |
| **R46-T008** | [#98: Build a regression check](https://github.com/S-AI-Projects/gitignore/pull/98) | `CodeIgniter.gitignore` | `13/13 checks passed` | **Open** |
| **R46-T009** | [#99: Explain the narrowest rule](https://github.com/S-AI-Projects/gitignore/pull/99) | `Global/Otto.gitignore` | `18/18 checks passed` | **Open** |
| **R46-T010** | [#100: Add a realistic usage example](https://github.com/S-AI-Projects/gitignore/pull/100) | `Global/Dreamweaver.gitignore` | `26/26 checks passed` | **Open** |

---

## 🛠️ Technology Stack

- **Graphics & 3D:** Three.js (r128), WebGL, Custom procedural geometry, Soft PCF shadow mapping, ACESFilmic tone mapping
- **Audio:** Web Audio API (procedural oscillator frequency modulation and bandpass noise)
- **UI / Frontend:** Vanilla ES6+ JavaScript, CSS3 Glassmorphism, CSS Grid & Flexbox, HTML5 Canvas
- **Deployment:** GitHub Pages via GitHub Actions CI/CD pipeline (`.github/workflows/deploy.yml`)

---

## 🏃 Local Execution

To run the portfolio locally without installing extra dependencies:

```bash
# Clone the repository
git clone https://github.com/sathwikracharla81-cmd/my-portfolio.git
cd my-portfolio

# Start a local web server (Python 3)
python3 -m http.server 8000
```

Open `http://localhost:8000` in your browser.

---

## 👤 Author

**Sathwik Racharla**  
- Location: Vemulawada, Telangana, India  
- College: Newton School of Technology  
- GitHub: [@sathwikracharla81-cmd](https://github.com/sathwikracharla81-cmd)  
- LinkedIn: [Sathwik Racharla](https://www.linkedin.com/in/sathwik-racharla-34354a32b/)  
- Email: sathwikracharla81@gmail.com
