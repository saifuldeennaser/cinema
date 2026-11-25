/**
 * CINEVERSE - MAIN APPLICATION ENTRYPOINT
 * Pure High-Performance Vanilla ES6+ architecture without React, Next.js, Tailwind or Supabase.
 */

import { MOVIES_DATABASE, SKILLS_CAST, CRITICS_REVIEWS, BOX_OFFICE_TIMELINE } from './data/movies.js';
import { CinemaProjectorBeam } from './canvas/projector-beam.js';
import { FilmGrainOverlay } from './canvas/film-grain.js';
import { CinemaHero } from './components/hero.js';
import { MovieCarousel } from './components/carousel.js';
import { MovieModal } from './components/movie-modal.js';
import { CinemaTicketModal } from './components/ticket.js';
import { CinemaModeController } from './components/cinema-mode.js';

class CineverseApp {
  constructor() {
    this.projectorBeam = null;
    this.filmGrain = null;
    this.movieModal = null;
    this.ticketModal = null;
    this.cinemaModeCtrl = null;
  }

  init() {
    console.log("%c🎬 CINEVERSE CINEMATIC ENGINE INITIALIZED", "color: #f5c518; font-size: 14px; font-weight: bold; background: #07090e; padding: 4px 8px; border: 1px solid #f5c518;");

    // 1. Initialize Canvas VFX
    this.projectorBeam = new CinemaProjectorBeam('projector-canvas');
    this.filmGrain = new FilmGrainOverlay('film-grain-canvas');

    // 2. Initialize Modals
    this.movieModal = new MovieModal('movie-screening-modal');
    this.ticketModal = new CinemaTicketModal('ticket-modal');

    // 3. Initialize Cinema Mode (Dimming & Letterbox)
    this.cinemaModeCtrl = new CinemaModeController(this.projectorBeam);

    // 4. Render Hero Premiere Marquee
    const featuredMovie = MOVIES_DATABASE.find(m => m.featured) || MOVIES_DATABASE[0];
    new CinemaHero('hero-showcase', featuredMovie, (movie) => {
      this.movieModal.open(movie);
    });

    // 5. Render Horizontal Carousels
    this.renderCarousels();

    // 6. Render Cast & Crew (Skills Reel)
    this.renderCrewSection();

    // 7. Render Critics Acclaim
    this.renderCriticsSection();

    // 8. Render Career Filmography Timeline
    this.renderFilmographyTimeline();

    // 9. Attach Global Listeners, ScrollSpy & Smooth Reveal
    this.attachGlobalListeners();
    this.setupNavbarScrollSpy();
    this.setupSmoothScrollReveal();
  }

  setupSmoothScrollReveal() {
    const targets = document.querySelectorAll('.carousel-section, .crew-category-card, .review-card, .filmography-table, .hero-content');
    targets.forEach(t => t.classList.add('reveal-on-scroll'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(t => observer.observe(t));
  }

  setupNavbarScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = [
      { id: 'hero-showcase', link: document.querySelector('.nav-link[href="#hero-showcase"]') },
      { id: 'carousels-container', link: document.querySelector('.nav-link[href="#carousels-container"]') },
      { id: 'crew-section', link: document.querySelector('.nav-link[href="#crew-section"]') },
      { id: 'critics-section', link: document.querySelector('.nav-link[href="#critics-section"]') },
      { id: 'timeline-section', link: document.querySelector('.nav-link[href="#timeline-section"]') }
    ];

    const setActiveLink = (activeLink) => {
      navLinks.forEach(l => l.classList.remove('active'));
      if (activeLink) activeLink.classList.add('active');
    };

    // Click handler for instant response and smooth scroll
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveLink(link);
      });
    });

    // Scroll listener / ScrollSpy
    const onScroll = () => {
      const scrollPos = window.scrollY + 160; // offset for fixed navbar
      let currentSection = sections[0];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection && currentSection.link) {
        setActiveLink(currentSection.link);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial trigger
  }

  renderCarousels() {
    const carouselsContainer = document.getElementById('carousels-container');
    if (!carouselsContainer) return;

    // Row 1: Box Office Blockbusters
    const blockbusters = MOVIES_DATABASE.filter(m => m.category === 'blockbusters');
    new MovieCarousel({
      containerId: 'carousels-container',
      title: 'Top Box Office Blockbusters',
      arabicTitle: 'أقوى إنتاجات الأنظمة الموزعة والتجارة الرقمية',
      badge: 'IMAX Verified',
      movies: blockbusters,
      onOpenPlayer: (movie) => this.movieModal.open(movie)
    });

    // Row 2: Indie & Algorithmic Masterpieces
    const indies = MOVIES_DATABASE.filter(m => m.category === 'indie');
    new MovieCarousel({
      containerId: 'carousels-container',
      title: 'Critically Acclaimed Indie & Creative Gems',
      arabicTitle: 'روائع البرمجة الإبداعية وهندسة الجرافيكس',
      badge: 'Director’s Choice',
      movies: indies,
      onOpenPlayer: (movie) => this.movieModal.open(movie)
    });
  }

  renderCrewSection() {
    const grid = document.getElementById('crew-grid');
    if (!grid) return;

    grid.innerHTML = SKILLS_CAST.map(category => `
      <div class="crew-category-card">
        <h3 class="crew-category-title">
          <span>🎬</span>
          <span>${category.role}</span>
        </h3>
        <div class="cast-member-list">
          ${category.castMembers.map(member => `
            <div class="cast-member-row">
              <div class="member-left">
                <span class="member-icon">${member.icon}</span>
                <div>
                  <div class="member-name">${member.name}</div>
                  <div class="member-role">${member.role}</div>
                </div>
              </div>
              <span class="member-badge">${member.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  renderCriticsSection() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;

    grid.innerHTML = CRITICS_REVIEWS.map(r => `
      <div class="review-card">
        <div>
          <div class="review-rating">${r.rating}</div>
          <h4 class="review-headline">${r.headline}</h4>
          <p class="review-quote">${r.quote}</p>
        </div>
        <div class="review-author">
          <span class="critic-name">${r.critic}</span>
          <span class="critic-pub">${r.publication}</span>
        </div>
      </div>
    `).join('');
  }

  renderFilmographyTimeline() {
    const tbody = document.getElementById('filmography-body');
    if (!tbody) return;

    tbody.innerHTML = BOX_OFFICE_TIMELINE.map(item => `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--gold-primary);">${item.year}</td>
        <td><strong>${item.title}</strong></td>
        <td style="color: var(--teal-cinema);">${item.studio}</td>
        <td><span class="boxoffice-verdict">${item.verdict}</span></td>
        <td style="color: var(--text-muted); font-size: 0.9rem;">${item.description}</td>
      </tr>
    `).join('');
  }

  attachGlobalListeners() {
    // Nav VIP Pass button
    const navTicketBtn = document.getElementById('nav-vip-ticket-btn');
    const ticketModalElem = document.getElementById('ticket-modal');

    navTicketBtn?.addEventListener('click', () => {
      ticketModalElem?.classList.add('active');
    });
  }
}

// Boot application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const app = new CineverseApp();
  app.init();
});
