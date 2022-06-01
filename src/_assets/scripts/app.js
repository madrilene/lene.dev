(function () {
  'use strict';

  // responsive navigation toggle

  const navigationToggle = document.querySelector('[data-id="nav-toggle"]');
  const navigationItems = document.querySelector('[data-id="nav-items"]');
  let navIsOpen = false;

  navigationToggle.addEventListener(
    'click',
    function (event) {
      navIsOpen = !navIsOpen;
      navIsOpen
        ? ((navigationToggle.querySelector('span').textContent = 'Cerrar'),
          navigationToggle.setAttribute('aria-expanded', 'true'))
        : ((navigationToggle.querySelector('span').textContent = 'Menú'),
          navigationToggle.setAttribute('aria-expanded', 'false'));
      navigationItems.classList.toggle('hidden');
    },
    false
  );

  // dropdown toggle + close dropdown on click outside

  const dropdownToggle = document.querySelector('[data-id="dropdown-toggle"]');
  const dropdownItems = document.querySelector('[data-id="dropdown-items"]');
  const svgSwitch = dropdownToggle.firstElementChild;

  const show = () => {
    dropdownToggle.setAttribute('aria-expanded', true);
    dropdownItems.setAttribute('aria-hidden', false);
    dropdownItems.classList.remove('hidden');
    dropdownItems.classList.add('block');
    svgSwitch.classList.add('-rotate-180', 'transition', 'ease-in-out');
  };

  const hide = () => {
    dropdownToggle.setAttribute('aria-expanded', false);
    dropdownItems.setAttribute('aria-hidden', true);
    dropdownItems.classList.add('hidden');
    dropdownItems.classList.remove('block');
    svgSwitch.classList.remove('-rotate-180');
  };

  dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    JSON.parse(dropdownToggle.getAttribute('aria-expanded')) ? hide() : show();
  });

  const handleClosure = (event) => !dropdownItems.contains(event.target) && hide();

  window.addEventListener('click', handleClosure);
  window.addEventListener('focusin', handleClosure);

  // If there's more than 2 windows worth of scrolling
  let isDeepContent = window.innerHeight * 2 <= document.body.clientHeight ? true : false;

  if (isDeepContent) {
    let scrollToTop = document.querySelector('[data-id="scroll-top"]');
    scrollToTop.classList.remove('hidden');

    scrollToTop.addEventListener('click', (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  const images = document.querySelectorAll('img.lazy');

  let options = {
    root: null, // Page as root
    // rootMargin: (top, right bottom, left)
    rootMargin: '1px 1px 1px 1px',
    threshold: 0,
  };

  let fetchImage = function (url) {
    return new Promise(function (resolve, reject) {
      let image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  };
  let loadImage = function (image) {
    let src = image.dataset.src;
    fetchImage(src).then(function () {
      image.classList.add('fadeIn');
      image.src = src;
    });
  };
  let handleIntersection = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        loadImage(entry.target);
      }
    });
  };
  // The observer for the images on the page
  let observer = new IntersectionObserver(handleIntersection, options);

  images.forEach(function (img) {
    if ('IntersectionObserver' in window) {
      // LazyLoad images using IntersectionObserver
      observer.observe(img);
    } else {
      // Load all images at once
      loadImage(img);
    }
  });
})();

// simple fade transition home
let current = 0,
  slides = document.querySelectorAll('#fade picture');

setInterval(function () {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('opacity-0');
    slides[i].classList.remove('opacity-1');
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].classList.add('opacity-1');
  slides[current].classList.remove('opacity-0');
}, 3000);

// cards redundant click, accessible whole card clickable solution by Heydon Pickering

const cards = [...document.querySelectorAll('.card')];
cards.forEach((card) => {
  card.style.cursor = 'pointer';
  let down,
    up,
    link = card.querySelector('a');
  card.onmousedown = () => (down = +new Date());
  card.onmouseup = () => {
    up = +new Date();
    if (up - down < 200) {
      link.click();
    }
  };
});
