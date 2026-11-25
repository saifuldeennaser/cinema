/**
 * CINEMA HORIZONTAL CAROUSEL COMPONENT
 * Buttery smooth 60/120 FPS card tilt & fluid drag-to-scroll carousel.
 */

export class MovieCarousel {
  constructor({ containerId, title, arabicTitle, badge, movies, onOpenPlayer }) {
    this.container = document.getElementById(containerId);
    this.title = title;
    this.arabicTitle = arabicTitle;
    this.badge = badge;
    this.movies = movies;
    this.onOpenPlayer = onOpenPlayer;
    this.render();
  }

  render() {
    if (!this.container) return;

    const rowId = `carousel-track-${Math.random().toString(36).substring(2, 9)}`;

    const rowHTML = `
      <div class="carousel-section">
        <div class="carousel-header">
          <div class="carousel-title-group">
            <h2 class="carousel-title">
              ${this.title}
              ${this.badge ? `<span class="badge-row">${this.badge}</span>` : ''}
            </h2>
            ${this.arabicTitle ? `<span class="carousel-arabic-subtitle">${this.arabicTitle}</span>` : ''}
          </div>
          <div class="carousel-nav-controls">
            <button class="carousel-arrow prev" data-target="${rowId}" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button class="carousel-arrow next" data-target="${rowId}" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <div class="carousel-track-wrapper">
          <div class="carousel-track" id="${rowId}">
            ${this.movies.map((movie, idx) => this.renderCard(movie, idx)).join('')}
          </div>
        </div>
      </div>
    `;

    this.container.insertAdjacentHTML('beforeend', rowHTML);
    this.attachEvents(rowId);
  }

  renderCard(movie, idx) {
    return `
      <div class="movie-card" data-movie-id="${movie.id}">
        <div class="movie-card-inner">
          <div class="poster-container">
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy" />
            <div class="poster-overlay">
              <div class="poster-top-badges">
                <span class="badge-match">${movie.rottenTomatoes} Match</span>
                <span class="badge-format">${movie.videoQuality}</span>
              </div>
              <div class="poster-actions">
                <button class="card-btn-play" title="Play Movie">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                </button>
              </div>
            </div>
            <div class="reel-strip-edge"></div>
          </div>

          <div class="movie-info">
            <div class="movie-meta-line">
              <span class="rating-star">★ ${movie.imdbRating}</span>
              <span class="year-bullet">•</span>
              <span class="year-val">${movie.year}</span>
              <span class="badge-age-mini">${movie.ageRating.split(':')[0]}</span>
            </div>
            <h3 class="movie-card-title">${movie.title}</h3>
            <p class="movie-card-tagline">${movie.tagline}</p>
            <div class="movie-genre-tags">
              ${movie.genre.slice(0, 2).map(g => `<span class="genre-mini">${g}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachEvents(trackId) {
    const track = document.getElementById(trackId);
    if (!track) return;

    // Arrow navigation
    const prevBtn = this.container.querySelector(`.carousel-arrow.prev[data-target="${trackId}"]`);
    const nextBtn = this.container.querySelector(`.carousel-arrow.next[data-target="${trackId}"]`);

    prevBtn?.addEventListener('click', () => {
      track.scrollBy({ left: -track.clientWidth * 0.75, behavior: 'smooth' });
    });

    nextBtn?.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth * 0.75, behavior: 'smooth' });
    });

    // FLUID DRAG-TO-SCROLL (MOUSE & TOUCH MOMENTUM)
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      hasMoved = false;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
      track.style.userSelect = 'none';
      track.style.scrollBehavior = 'auto'; // allow instant drag response
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      track.style.cursor = '';
      track.style.userSelect = '';
      track.style.scrollBehavior = 'smooth';
    });

    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 5) hasMoved = true;
      track.scrollLeft = scrollLeft - walk;
    });

    // BUTTERY SMOOTH 3D CARD TILT WITH LERP
    const cards = track.querySelectorAll('.movie-card');
    cards.forEach((card) => {
      const movieId = card.getAttribute('data-movie-id');
      const movie = this.movies.find(m => m.id === movieId);
      if (!movie) return;

      const cardInner = card.querySelector('.movie-card-inner');
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;
      let isHovering = false;
      let rAF = null;

      const updateTilt = () => {
        if (!isHovering && Math.abs(currentRotX) < 0.05 && Math.abs(currentRotY) < 0.05) {
          cardInner.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          return;
        }

        // Fluid linear interpolation (LERP)
        currentRotX += (targetRotX - currentRotX) * 0.12;
        currentRotY += (targetRotY - currentRotY) * 0.12;

        const scale = isHovering ? 1.04 : 1;
        cardInner.style.transform = `perspective(900px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;

        rAF = requestAnimationFrame(updateTilt);
      };

      card.addEventListener('mouseenter', () => {
        isHovering = true;
        cancelAnimationFrame(rAF);
        rAF = requestAnimationFrame(updateTilt);
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        targetRotX = ((y - centerY) / centerY) * -8;
        targetRotY = ((x - centerX) / centerX) * 8;
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        isHovering = false;
        targetRotX = 0;
        targetRotY = 0;
      });

      // Quick play button
      const playBtn = card.querySelector('.card-btn-play');
      playBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.onOpenPlayer(movie);
      });

      // Whole card click (ignore if user was dragging)
      card.addEventListener('click', (e) => {
        if (hasMoved) {
          e.preventDefault();
          return;
        }
        this.onOpenPlayer(movie);
      });
    });
  }
}
