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
    if (!document.documentElement) return; // Check if document.documentElement is available
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

    // Adjust primary color based on the theme
    if (this.currentTheme === 'light') {
      // Get the computed style of the document root to check the current primary color
      var style = window.getComputedStyle(document.documentElement);
      var currentPrimaryColor = style.getPropertyValue('--color-primary').trim();

      // Logic to select and apply a new color
      if (currentPrimaryColor === 'rgba(0, 0, 0, 0)' || currentPrimaryColor === '') {
        // If the color is not set or fails to retrieve, set a default new random color
        const randomColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
        document.documentElement.style.setProperty('--color-primary', randomColor);
      } else {
        // Modify the current color if needed, or just reapply to ensure it's active
        const randomColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
        document.documentElement.style.setProperty('--color-primary', randomColor);
      }
    } else if (this.currentTheme === 'dark') {
      // Optionally set a different color for dark mode
      document.documentElement.style.setProperty('--color-primary', '#333'); // Example dark mode color
    }
  }

  triggerPendulumEffect() {
    this.svg.classList.add('pendulum');
    setTimeout(() => this.svg.classList.remove('pendulum'), 1000); // Duration of the pendulum animation
  }
}

customElements.define('custom-lightbulb', CustomLightbulb);
