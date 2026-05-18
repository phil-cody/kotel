import { home } from '@/test-data/homePage';

function createAboutShortImage(image) {
  return `
  <img 
    src="${image.src}"
    alt="${image.alt}"
    class="about__image"
  >
  `;
}

export const renderAboutShort = () => {
  document.querySelector('.about__image-box').insertAdjacentHTML('beforeend', createAboutShortImage(home.about.img));
  document.querySelector('.about__sticker').textContent = home.about.sticker;
  document.querySelector('.about__title').textContent = home.about.title;
  document.querySelector('.about__description').textContent = home.about.description;
  document.querySelector('.about__more-info').insertAdjacentHTML('afterbegin', home.about.cta);
};