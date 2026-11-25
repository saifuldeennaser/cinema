/**
 * CINEMA SOUND ENGINE (MUTED & DISABLED BY USER REQUEST)
 * All audio effects removed.
 */

class SilentSoundEngine {
  constructor() {
    this.isMuted = true;
  }
  init() {}
  toggleMute() { return true; }
  playDeepNote() {}
  playClick() {}
  playHover() {}
  playModalOpen() {}
  toggleProjectorHum() { return false; }
  startProjectorHum() {}
  stopProjectorHum() {}
}

export const soundEngine = new SilentSoundEngine();
