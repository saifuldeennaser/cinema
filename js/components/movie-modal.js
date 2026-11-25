/**
 * CINEMA WATCHING ROOM / VIDEO PLAYER MODAL
 * Opens when clicking on any movie or play button.
 * Prominently displays: "The website is still under development" in the center of the video screen.
 */

export class MovieModal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.currentMovie = null;
    this.init();
  }

  init() {
    if (!this.modal) return;

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal || e.target.classList.contains('cinema-modal-backdrop')) {
        this.close();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(movie) {
    this.currentMovie = movie;
    this.render();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  render() {
    if (!this.modal || !this.currentMovie) return;
    const m = this.currentMovie;

    this.modal.innerHTML = `
      <div class="cinema-modal-backdrop"></div>
      <div class="cinema-modal-container player-modal-container">
        
        <!-- Modal Top Bar -->
        <div class="cinema-modal-header">
          <div class="modal-title-wrap">
            <span class="modal-badge-format">${m.videoQuality} • THEATER STREAM</span>
            <h2 class="modal-title">${m.title}</h2>
            <p class="modal-arabic">${m.arabicTitle}</p>
          </div>
          <button class="modal-close-btn" id="modal-close" aria-label="Close Screen">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="cinema-modal-body player-body">
          <!-- CINEMA WIDESCREEN VIDEO PLAYER -->
          <div class="cinema-video-player" style="background-image: linear-gradient(180deg, rgba(3, 5, 10, 0.85) 0%, rgba(3, 5, 10, 0.95) 100%), url('${m.backdrop}');">
            <div class="player-ambient-light"></div>

            <!-- CENTER UNDER DEVELOPMENT MESSAGE -->
            <div class="player-center-message">
              <div class="under-dev-badge">
                <span class="pulse-dot"></span>
                <span>PRODUCTION IN PROGRESS</span>
              </div>
              
              <div class="under-dev-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="3"/>
                  <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/>
                </svg>
              </div>

              <h3 class="under-dev-title">THE WEBSITE IS STILL UNDER DEVELOPMENT</h3>
              <p class="under-dev-arabic">الموقع لا يزال قيد التطوير</p>
              <p class="under-dev-desc">
                The full cinematic video stream and live presentation for <strong>${m.title}</strong> will premiere soon.
              </p>
            </div>

            <!-- CINEMA PLAYER TIMELINE & CONTROLS (SIMULATOR) -->
            <div class="player-controls-bar">
              <div class="player-scrub-bar">
                <div class="scrub-progress" style="width: 28%;">
                  <div class="scrub-head"></div>
                </div>
              </div>

              <div class="player-controls-row">
                <div class="controls-left">
                  <button class="player-btn" title="Play / Pause">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  </button>
                  <button class="player-btn" title="Rewind 10s">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                  </button>
                  <div class="player-timecode">
                    <span class="current-time">00:03:45</span> / <span class="total-time">01:42:18</span>
                  </div>
                </div>

                <div class="controls-right">
                  <span class="stream-quality-tag">4K HDR</span>
                  <button class="player-btn" title="Audio">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </button>
                  <button class="player-btn" title="Subtitles">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15h4M15 15h2M7 11h2M13 11h4"/></svg>
                  </button>
                  <button class="player-btn" title="Fullscreen">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- MOVIE DETAILS BELOW PLAYER -->
          <div class="player-movie-meta">
            <div class="meta-main">
              <div class="meta-badges-line">
                <span class="badge-match">${m.rottenTomatoes} Match</span>
                <span class="badge-year">${m.year}</span>
                <span class="badge-age-mini">${m.ageRating}</span>
                <span class="badge-runtime">${m.runtime}</span>
              </div>
              <p class="meta-tagline">“${m.tagline}”</p>
              <p class="meta-synopsis">${m.synopsis}</p>
            </div>

            <div class="meta-side">
              <div class="meta-side-row">
                <span class="label">Director / Role:</span>
                <span class="val">${m.director}</span>
              </div>
              <div class="meta-side-row">
                <span class="label">Genres:</span>
                <span class="val">${m.genre.join(', ')}</span>
              </div>
              <div class="meta-side-row">
                <span class="label">Production Scale:</span>
                <span class="val">${m.boxOffice.metric1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const closeBtn = this.modal.querySelector('#modal-close');
    closeBtn?.addEventListener('click', () => this.close());
  }
}
