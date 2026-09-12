// Web Audio API lightweight sound synthesizer for high-tech HUD immersion
class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('consortium_sound_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('consortium_sound_muted', this.isMuted ? 'true' : 'false');
    if (!this.isMuted) {
      this.playBeep(650, 0.08, 'sine');
    }
    return this.isMuted;
  }

  getMuted() {
    return this.isMuted;
  }

  playBeep(frequency = 440, duration = 0.05, type = 'sine', volume = 0.05) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might fail silently if autoplay blocked
    }
  }

  playHover() {
    this.playBeep(880, 0.03, 'sine', 0.02);
  }

  playClick() {
    this.playBeep(520, 0.08, 'triangle', 0.06);
  }

  playGlitch() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // silent catch
    }
  }

  playSuccess() {
    if (this.isMuted) return;
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.12, 'sine', 0.05);
      }, idx * 60);
    });
  }
}

export const sound = new SoundSystem();
