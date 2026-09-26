// Web Audio API lightweight sound synthesizer - permanently silenced per user request
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
  }

  init() {}
  toggleMute() { return true; }
  getMuted() { return true; }
  playBeep() {}
  playHover() {}
  playClick() {}
  playGlitch() {}
  playSuccess() {}
}

export const sound = new SoundSystem();
