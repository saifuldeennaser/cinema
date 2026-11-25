/**
 * CINEMA MODE CONTROLLER
 * Handles Cinema Mode dimming & widescreen letterboxing without any sound effects.
 */

export class CinemaModeController {
  constructor(projectorBeamInstance) {
    this.projectorBeam = projectorBeamInstance;
    this.isCinemaMode = false;
    this.init();
  }

  init() {
    this.setupCinemaModeToggle();
  }

  setupCinemaModeToggle() {
    const toggleBtn = document.getElementById('cinema-mode-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      this.isCinemaMode = !this.isCinemaMode;
      document.body.classList.toggle('cinema-mode-active', this.isCinemaMode);
      toggleBtn.classList.toggle('active', this.isCinemaMode);

      if (this.projectorBeam) {
        this.projectorBeam.setCinemaMode(this.isCinemaMode);
      }

      this.showToast(this.isCinemaMode 
        ? '🎬 Cinema Mode Engaged: Theater Lights Dimmed' 
        : '💡 Theater Lights Restored'
      );
    });
  }

  showToast(message) {
    let toast = document.getElementById('cinema-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cinema-toast';
      toast.className = 'cinema-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2800);
  }
}
