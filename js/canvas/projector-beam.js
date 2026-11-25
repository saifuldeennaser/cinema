/**
 * PROJECTOR BEAM & VOLUMETRIC DUST ENGINE - ULTRA OPTIMIZED
 * Silky smooth 60/120 FPS hardware accelerated rendering.
 * Removed costly shadowBlur, optimized particle batching.
 */

export class CinemaProjectorBeam {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.particles = [];
    this.particleCount = 42;
    this.mouse = { x: window.innerWidth * 0.5, y: 150 };
    this.targetMouse = { x: window.innerWidth * 0.5, y: 150 };
    this.isCinemaMode = false;
    this.animId = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });
    window.addEventListener('mousemove', (e) => {
      this.targetMouse.x = e.clientX;
      this.targetMouse.y = e.clientY;
    }, { passive: true });

    // Generate floating dust particles
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.25 - 0.08,
        opacity: Math.random() * 0.6 + 0.2,
        wobble: Math.random() * Math.PI * 2
      });
    }

    this.render();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setCinemaMode(enabled) {
    this.isCinemaMode = enabled;
  }

  render() {
    if (!this.ctx) return;

    // Smooth lerp follow
    this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
    this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

    const w = this.canvas.width;
    const h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);

    const projX = w * 0.5;
    const projY = -30;
    const beamIntensity = this.isCinemaMode ? 0.2 : 0.08;
    const targetX = this.mouse.x;
    const targetY = Math.max(this.mouse.y, h * 0.35);

    // Draw Light Cone
    const gradient = this.ctx.createRadialGradient(
      projX, projY, 20,
      targetX, targetY, Math.max(w, h) * 0.8
    );

    gradient.addColorStop(0, `rgba(180, 220, 255, ${beamIntensity * 1.6})`);
    gradient.addColorStop(0.25, `rgba(130, 195, 255, ${beamIntensity * 0.8})`);
    gradient.addColorStop(0.6, `rgba(80, 140, 230, ${beamIntensity * 0.25})`);
    gradient.addColorStop(0.9, 'rgba(10, 15, 30, 0.0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    this.ctx.beginPath();
    this.ctx.moveTo(projX, projY);
    this.ctx.lineTo(targetX - w * 0.5, h + 150);
    this.ctx.lineTo(targetX + w * 0.5, h + 150);
    this.ctx.closePath();
    this.ctx.fillStyle = gradient;
    this.ctx.fill();

    // Batch draw dust particles (Zero shadowBlur = Pure 60/120 FPS speed)
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.speedX;
      p.y += p.speedY;
      p.wobble += 0.02;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      const distX = Math.abs(p.x - targetX);
      const inBeam = distX < (w * 0.35 * (p.y / h + 0.3));
      const particleAlpha = inBeam
        ? (p.opacity * (this.isCinemaMode ? 0.85 : 0.4) * (1 + Math.sin(p.wobble) * 0.25))
        : (p.opacity * 0.1);

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(220, 240, 255, ${particleAlpha})`;
      this.ctx.fill();
    }

    this.animId = requestAnimationFrame(() => this.render());
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}
