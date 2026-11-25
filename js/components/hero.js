/**
 * CINEMA HERO COMPONENT
 * Renders the Featured Premiere Blockbuster with IMAX presentation.
 * (Starring tags section removed as requested by user).
 */

export class CinemaHero {
  constructor(containerId, featuredMovie, onOpenPlayer) {
    this.container = document.getElementById(containerId);
    this.movie = featuredMovie;
    this.onOpenPlayer = onOpenPlayer;
    this.render();
  }

  render() {
    if (!this.container || !this.movie) return;

    this.container.innerHTML = `
      <div class="hero-backdrop" style="background-image: linear-gradient(to top, rgba(7, 10, 18, 1) 0%, rgba(7, 10, 18, 0.45) 60%, rgba(7, 10, 18, 0.85) 100%), linear-gradient(to right, rgba(7, 10, 18, 0.95) 0%, rgba(7, 10, 18, 0.6) 45%, rgba(7, 10, 18, 0.1) 100%), url('${this.movie.backdrop}');">
        <div class="hero-ambient-glow"></div>
      </div>

      <div class="hero-content">
        <div class="hero-badges">
          <span class="badge-imax">IMAX ENHANCED</span>
          <span class="badge-quality">${this.movie.videoQuality}</span>
          <span class="badge-rating">${this.movie.ageRating}</span>
        </div>

        <h1 class="hero-title">${this.movie.title}</h1>
        <p class="hero-arabic-title">${this.movie.arabicTitle}</p>

        <div class="hero-scores">
          <div class="score-pill tomatoes">
            <span class="score-icon">🍅</span>
            <strong>${this.movie.rottenTomatoes}</strong>
            <small>Certified Fresh</small>
          </div>
          <div class="score-pill imdb">
            <span class="score-icon">★</span>
            <strong>${this.movie.imdbRating}/10</strong>
            <small>IMDb Critics</small>
          </div>
          <div class="score-pill runtime">
            <span class="score-icon">⏱</span>
            <span>${this.movie.runtime}</span>
          </div>
          <div class="score-pill year">
            <span>${this.movie.year}</span>
          </div>
        </div>

        <p class="hero-tagline">“${this.movie.tagline}”</p>
        <p class="hero-synopsis">${this.movie.synopsis}</p>

        <div class="hero-actions">
          <button class="btn btn-primary btn-play" id="hero-play-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
            <span>Watch Now</span>
          </button>

          <button class="btn btn-secondary btn-info" id="hero-info-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <span>Production Screening</span>
          </button>

          <button class="btn btn-gold btn-ticket-quick" id="hero-ticket-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <path d="M12 6v12M2 12h2M20 12h2"/>
            </svg>
            <span>VIP Pass / Contact</span>
          </button>
        </div>
      </div>
    `;

    // Event listeners
    const playBtn = document.getElementById('hero-play-btn');
    const infoBtn = document.getElementById('hero-info-btn');
    const ticketBtn = document.getElementById('hero-ticket-btn');

    playBtn?.addEventListener('click', () => {
      this.onOpenPlayer(this.movie);
    });

    infoBtn?.addEventListener('click', () => {
      this.onOpenPlayer(this.movie);
    });

    ticketBtn?.addEventListener('click', () => {
      const ticketModal = document.getElementById('ticket-modal');
      if (ticketModal) {
        ticketModal.classList.add('active');
      }
    });
  }
}
