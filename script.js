/* ════════════════════════════════════════════════════════════════
   SATHWIK RACHARLA — PORTFOLIO SCRIPT
   Royal Scroll Animation · Navigation · Reveal · Accessibility
   ════════════════════════════════════════════════════════════════ */

'use strict';

/* ── DOM REFERENCES ───────────────────────────────────────────── */
const introScreen   = document.getElementById('intro-screen');
const openBtn       = document.getElementById('open-story-btn');
const portfolio     = document.getElementById('portfolio');
const scrollImg     = document.getElementById('scroll-image');
const birdWrapper   = document.getElementById('bird-wrapper');
const navToggle     = document.getElementById('nav-toggle');
const navLinks      = document.getElementById('nav-links');
const mainNav       = document.getElementById('main-nav');
const footerYear    = document.getElementById('footer-year');

/* ── STATE ────────────────────────────────────────────────────── */
let animationPlaying = false;

/* ── UTILITIES ────────────────────────────────────────────────── */
const wait = ms => new Promise(r => setTimeout(r, ms));

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── FOOTER YEAR ──────────────────────────────────────────────── */
if (footerYear) footerYear.textContent = new Date().getFullYear();

/* ═══════════════════════════════════════════════════════════════
   OPENING ANIMATION — ROYAL SCROLL SEQUENCE
   ═══════════════════════════════════════════════════════════════ */

/**
 * Reveal the main portfolio after the scroll animation.
 * Handles both reduced-motion and full-animation paths.
 */
function revealPortfolio() {
  portfolio.removeAttribute('aria-hidden');
  portfolio.style.display = '';

  /* Trigger DOM paint before animation class */
  requestAnimationFrame(() => {
    introScreen.classList.add('exit');

    introScreen.addEventListener('animationend', () => {
      introScreen.style.display = 'none';
      introScreen.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }, { once: true });
  });
}

/**
 * Reduced-motion path: skip the bird/scroll animation,
 * cross-fade the intro out immediately.
 */
function reducedMotionReveal() {
  introScreen.style.transition = 'opacity 0.5s ease';
  introScreen.style.opacity    = '0';
  portfolio.removeAttribute('aria-hidden');
  portfolio.style.display = '';

  setTimeout(() => {
    introScreen.style.display = 'none';
    introScreen.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }, 550);
}

/**
 * Full cinematic animation sequence:
 * 1. Button click response
 * 2. Bird enters from left
 * 3. Scroll lifts
 * 4. Bird + scroll fly away together
 * 5. Portfolio revealed
 */
async function runScrollAnimation() {
  if (animationPlaying) return;
  animationPlaying = true;

  /* Disable button */
  openBtn.disabled = true;
  openBtn.classList.add('clicked');

  await wait(400); /* Let the click animation finish */

  /* ── Phase 1: Bird appears ── */
  birdWrapper.style.opacity = '';
  birdWrapper.classList.add('phase-appear');

  await wait(900); /* Bird settles near the scroll */

  /* ── Phase 2: Scroll begins to lift ── */
  if (scrollImg.style.display !== 'none') {
    scrollImg.classList.add('lifting');
  } else {
    /* Fallback parchment */
    const fallback = document.getElementById('scroll-fallback');
    if (fallback) {
      fallback.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)';
      fallback.style.transform  = 'translateY(-8px) rotate(-1deg)';
    }
  }

  await wait(650); /* Scroll settles lifted */

  /* ── Phase 3: Bird + scroll fly away ── */
  birdWrapper.classList.remove('phase-appear');
  birdWrapper.classList.add('phase-fly');

  if (scrollImg.style.display !== 'none') {
    scrollImg.classList.remove('lifting');
    scrollImg.classList.add('flying-away');
  } else {
    const fallback = document.getElementById('scroll-fallback');
    if (fallback) {
      fallback.style.transition = 'transform 1.4s cubic-bezier(0.4,0,0.2,1), opacity 1.4s ease';
      fallback.style.transform  = 'translateY(-60vh) translateX(60vw) rotate(20deg) scale(0.2)';
      fallback.style.opacity    = '0';
    }
  }

  await wait(1000); /* Let animations run */

  /* ── Phase 4: Fade intro, reveal portfolio ── */
  revealPortfolio();
}

/* ── BUTTON CLICK HANDLER ─────────────────────────────────────── */
if (openBtn) {
  openBtn.addEventListener('click', () => {
    if (animationPlaying) return;

    if (prefersReducedMotion()) {
      reducedMotionReveal();
      return;
    }
    runScrollAnimation();
  });
}

/* ── KEYBOARD: Enter/Space on button ─────────────────────────── */
openBtn?.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openBtn.click();
  }
});

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO INITIALISATION
   ═══════════════════════════════════════════════════════════════ */

/* Keep portfolio hidden beneath the intro */
portfolio.style.display = 'block';
portfolio.setAttribute('aria-hidden', 'true');
document.body.style.overflow = 'hidden'; /* Prevent scroll while intro is active */

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════ */

/* Scroll-triggered nav style */
const onScroll = () => {
  if (window.scrollY > 20) {
    mainNav?.classList.add('scrolled');
  } else {
    mainNav?.classList.remove('scrolled');
  }
  updateActiveNavLink();
};

window.addEventListener('scroll', onScroll, { passive: true });

/* Mobile hamburger */
navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

/* Close mobile nav on link click */
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

/* Active nav link highlighting */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const links    = navLinks?.querySelectorAll('a[href^="#"]') ?? [];
  let   current  = '';

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= 100) current = section.id;
  });

  links.forEach(link => {
    const target = link.getAttribute('href')?.slice(1);
    link.classList.toggle('active', target === current);
  });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL-REVEAL (INTERSECTION OBSERVER)
   ═══════════════════════════════════════════════════════════════ */
function initReveal() {
  if (prefersReducedMotion()) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); /* Fire once */
      }
    });
  }, {
    threshold:  0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

/* Initialise reveal after portfolio is visible */
const portfolioMutationObserver = new MutationObserver(() => {
  if (!portfolio.hasAttribute('aria-hidden')) {
    initReveal();
    portfolioMutationObserver.disconnect();
  }
});

portfolioMutationObserver.observe(portfolio, { attributes: true, attributeFilter: ['aria-hidden'] });

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight = mainNav?.offsetHeight ?? 64;
    const top       = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  });
});

/* ═══════════════════════════════════════════════════════════════
   PORTRAIT FALLBACK — show monogram if image fails
   ═══════════════════════════════════════════════════════════════ */
const portraitImg = document.querySelector('.portrait-img');
if (portraitImg) {
  portraitImg.addEventListener('error', () => {
    portraitImg.closest('.portrait-frame')?.classList.add('portrait-placeholder');
  });
}

