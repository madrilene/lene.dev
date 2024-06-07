import {colorVariations} from '../../../_data/designTokens/colorArray'; // Adjust path as necessary

class CustomLightbulb extends HTMLElement {
  constructor() {
    super();
    this.storageKey = 'theme-preference';
    this.lastLightColor = null;
    this.button = this.querySelector('button');
    this.svg = this.querySelector('svg');
  }

  connectedCallback() {
    this.currentTheme = this.getColorPreference();
    this.updateTheme();
    this.button.addEventListener('click', () => this.toggleTheme());
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.handleSystemThemeChange.bind(this));
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.updateTheme();
  }

  handleSystemThemeChange(e) {
    this.currentTheme = e.matches ? 'dark' : 'light';
    this.updateTheme();
  }

  getColorPreference() {
    const storedPreference = localStorage.getItem(this.storageKey);
    return storedPreference || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  updateTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem(this.storageKey, this.currentTheme);
    this.button.setAttribute('aria-pressed', this.currentTheme === 'dark' ? 'true' : 'false');
    this.button.setAttribute(
      'aria-label',
      `Switch to ${this.currentTheme === 'dark' ? 'light' : 'dark'} theme`
    );

    this.svg?.classList.toggle('dark', this.currentTheme === 'dark');
    this.svg?.classList.toggle('light', this.currentTheme === 'light');
    this.triggerPendulumEffect();

    if (this.currentTheme === 'light') {
      const randomColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
      document.documentElement.style.setProperty('--color-primary', randomColor);
      this.lastLightColor = randomColor;
      // Update the theme color meta tag to reflect the current primary color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', randomColor);
      }
    } else if (this.currentTheme === 'dark' && this.lastLightColor) {
      document.documentElement.style.setProperty('--color-primary', this.lastLightColor);
    }
  }
  triggerPendulumEffect() {
    if (!this.svg) return; // Check if svg is available
    this.svg.classList.add('pendulum');
    setTimeout(() => this.svg.classList.remove('pendulum'), 1000);
  }

  updateThemeColor() {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim();
    themeColorMeta.setAttribute('content', primaryColor);
  }
}

customElements.define('custom-lightbulb', CustomLightbulb);
