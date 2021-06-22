// testimonial slider

const slides = document.querySelectorAll('.testimonial__slide');
let index = 0;

function prevSlide() {
  if (index == 0) index = slides.length - 1;
  else index--;

  slides[0].style.marginLeft = `-${index * 100}%`;
}

function nextSlide() {
  if (index == slides.length - 1) index = 0;
  else index++;

  slides[0].style.marginLeft = `-${index * 100}%`;
}

// portfolio slider

const portfolioSlider = document.querySelector('.portfolio__slider');
const portfolioItems = Array.from(
  document.querySelectorAll('.portfolio__item')
);
const portfolioButtons = document.querySelectorAll(
  '.portfolio__tabMenu button'
);

function show(param) {
  const items = portfolioItems.filter((item) => item.classList.contains(param));

  portfolioItems.forEach((item) => (item.style.display = 'none'));
  items.forEach((item) => (item.style.display = 'block'));

  if (items.length < 4) portfolioSlider.style.animation = 'none';
  else
    portfolioSlider.style.animation =
      'portfolio-slider 5s linear infinite alternate';
}

portfolioButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    Array.from(btn.parentElement.children).forEach((child) =>
      child.classList.remove('portfolio__tabMenu--active')
    );
    btn.classList.add('portfolio__tabMenu--active');

    switch (btn.dataset.text) {
      case 'all':
        return show('all');
      case 'ui':
        return show('ui');
      case 'brand':
        return show('brand');
      case 'graphic':
        return show('graphic');
      default:
        show('all');
    }
  });
});

// small devices - open navigation

const navBtn = document.querySelector('.header__navBtn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
nav.addEventListener('click', (e) => {
  if (e.target.attributes[0].name === 'href') nav.classList.remove('nav-open');
});

// form submit

const form = document.querySelector('form');

form.addEventListener('submit', (e) => e.preventDefault());
