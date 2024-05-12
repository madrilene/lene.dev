import {colorVariations} from '../../../_data/designTokens/colorArray'; // Adjust path as necessary

class CustomLightbulb extends HTMLElement {
  constructor() {
    super();
    this.storageKey = 'theme-preference';
    this.button = this.querySelector('button');
    this.svg = this.querySelector('svg');
  }

  connectedCallback() {
    this.currentTheme = this.getColorPreference();
    this.updateTheme();
    this.button.addEventListener('click', () => this.toggleTheme());
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.currentTheme = e.matches ? 'dark' : 'light';
      this.updateTheme();
    });
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.updateTheme();
  }

  getColorPreference() {
    const storedPreference = localStorage.getItem(this.storageKey);
    return storedPreference || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  updateTheme() {
    if (!document.documentElement) return; // Ensure the root element is available
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem(this.storageKey, this.currentTheme);
    this.button?.setAttribute('aria-pressed', this.currentTheme === 'dark' ? 'true' : 'false');
    this.button?.setAttribute(
      'aria-label',
      `Switch to ${this.currentTheme === 'dark' ? 'light' : 'dark'} theme`
    );

    this.svg?.classList.toggle('dark', this.currentTheme === 'dark');
    this.svg?.classList.toggle('light', this.currentTheme === 'light');
    this.triggerPendulumEffect();

    // Set a random color from the variations for the light theme or adjust for dark theme
    const randomColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
    if (this.currentTheme === 'light') {
      document.documentElement.style.setProperty('--color-primary', randomColor);
      document.documentElement.style.setProperty(
        '--color-bg',
        `color-mix(in oklab, ${randomColor} 5%, white)`
      );
      document.documentElement.style.setProperty(
        '--color-text',
        `color-mix(in oklab, ${randomColor} 5%, black)`
      );
    } else if (this.currentTheme === 'dark') {
      document.documentElement.style.setProperty('--color-primary', randomColor);
      document.documentElement.style.setProperty(
        '--color-bg',
        `color-mix(in oklab, ${randomColor} 5%, black)`
      );
      document.documentElement.style.setProperty(
        '--color-text',
        `color-mix(in oklab, ${randomColor} 5%, white)`
      );
    }
  }

  triggerPendulumEffect() {
    if (!this.svg) return; // Check if svg is available
    this.svg.classList.add('pendulum');
    setTimeout(() => this.svg.classList.remove('pendulum'), 1000);
  }

  triggerPendulumEffect() {
    this.svg.classList.add('pendulum');
    setTimeout(() => this.svg.classList.remove('pendulum'), 1000); // Duration of the pendulum animation
  }
}

customElements.define('custom-lightbulb', CustomLightbulb);
