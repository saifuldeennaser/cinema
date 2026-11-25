/**
 * CINEMA TICKET COMPONENT (VIP ADMIT ONE PASS)
 * Interactive Golden / Holographic ticket stub for hiring and resume download.
 */

import { PORTFOLIO_DIRECTOR } from '../data/movies.js';

export class CinemaTicketModal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.render();
    this.attachEvents();
  }

  render() {
    if (!this.modal) return;

    this.modal.innerHTML = `
      <div class="ticket-modal-overlay"></div>
      <div class="ticket-modal-dialog">
        <button class="ticket-close-btn" id="ticket-modal-close" aria-label="Close Ticket">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div class="cinema-ticket" id="golden-ticket">
          <!-- Holographic Shimmer Effect -->
          <div class="ticket-hologram"></div>

          <!-- Main Ticket Body -->
          <div class="ticket-main">
            <div class="ticket-top-row">
              <div class="ticket-brand">
                <span class="ticket-icon">🎟️</span>
                <span class="ticket-brand-text">CINEVERSE PREMIERE • VIP ADMIT ONE</span>
              </div>
              <div class="ticket-admit-badge">PRIORITY PASS</div>
            </div>

            <div class="ticket-body-content">
              <h3 class="ticket-candidate-name">${PORTFOLIO_DIRECTOR.name}</h3>
              <p class="ticket-candidate-title">${PORTFOLIO_DIRECTOR.title}</p>
              <p class="ticket-candidate-bio">${PORTFOLIO_DIRECTOR.bio}</p>

              <div class="ticket-meta-grid">
                <div class="ticket-meta-item">
                  <span class="ticket-meta-label">SEAT ASSIGNMENT</span>
                  <span class="ticket-meta-val">ROW A • SEAT 01 (LEAD)</span>
                </div>
                <div class="ticket-meta-item">
                  <span class="ticket-meta-label">EXPERIENCE RUNTIME</span>
                  <span class="ticket-meta-val">${PORTFOLIO_DIRECTOR.stats.totalRunTime}</span>
                </div>
                <div class="ticket-meta-item">
                  <span class="ticket-meta-label">STATUS</span>
                  <span class="ticket-meta-val status-green">AVAILABLE NOW</span>
                </div>
                <div class="ticket-meta-item">
                  <span class="ticket-meta-label">PRODUCTION BASE</span>
                  <span class="ticket-meta-val">${PORTFOLIO_DIRECTOR.location}</span>
                </div>
              </div>

              <div class="ticket-actions">
                <a href="mailto:${PORTFOLIO_DIRECTOR.social.email}" class="btn btn-gold btn-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>Dispatch Direct Offer</span>
                </a>
                <button class="btn btn-secondary btn-sm" id="copy-email-btn" data-email="${PORTFOLIO_DIRECTOR.social.email}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span id="copy-text">Copy Email</span>
                </button>
                <button class="btn btn-secondary btn-sm" id="download-cv-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  <span>Download Resume (CV)</span>
                </button>
              </div>
            </div>

            <div class="ticket-footer-barcode">
              <div class="barcode-lines">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
              <span class="barcode-number">NO. 8492-CINEMA-HIRE-2025</span>
            </div>
          </div>

          <!-- Perforated Tear Line -->
          <div class="ticket-perforation">
            <div class="perf-circle top"></div>
            <div class="perf-line"></div>
            <div class="perf-circle bottom"></div>
          </div>

          <!-- Ticket Stub -->
          <div class="ticket-stub">
            <div class="stub-header">ADMIT ONE</div>
            <div class="stub-details">
              <span>ROW A</span>
              <strong>SEAT 01</strong>
              <small>FULL-STACK</small>
            </div>
            <div class="stub-seal">
              <div class="seal-inner">★ TOP TALENT ★</div>
            </div>
            <div class="stub-code">#40921</div>
          </div>
        </div>
      </div>
    `;
  }

  attachEvents() {
    if (!this.modal) return;

    const overlay = this.modal.querySelector('.ticket-modal-overlay');
    const closeBtn = this.modal.querySelector('#ticket-modal-close');
    const copyBtn = this.modal.querySelector('#copy-email-btn');
    const downloadCvBtn = this.modal.querySelector('#download-cv-btn');
    const ticketCard = this.modal.querySelector('#golden-ticket');

    const closeModal = () => {
      this.modal.classList.remove('active');
    };

    overlay?.addEventListener('click', closeModal);
    closeBtn?.addEventListener('click', closeModal);

    // Copy Email
    copyBtn?.addEventListener('click', () => {
      navigator.clipboard?.writeText(PORTFOLIO_DIRECTOR.social.email);
      const copyText = this.modal.querySelector('#copy-text');
      if (copyText) {
        copyText.textContent = '✓ Copied to Clipboard!';
        setTimeout(() => {
          copyText.textContent = 'Copy Email';
        }, 2500);
      }
    });

    // Download CV (simulated instant generation or print)
    downloadCvBtn?.addEventListener('click', () => {
      window.print();
    });

    // Holographic tilt effect on mouse movement
    if (ticketCard) {
      ticketCard.addEventListener('mousemove', (e) => {
        const rect = ticketCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        ticketCard.style.setProperty('--holo-x', `${xPercent}%`);
        ticketCard.style.setProperty('--holo-y', `${yPercent}%`);
      });
    }
  }
}
