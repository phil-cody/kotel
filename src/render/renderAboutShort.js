import { getHomepage } from '@/api/getHomepage';

function createAboutShortImage(image) {
  const imageUrl = `${image}`;

  return `
  <img 
    src="${imageUrl}"
    alt
    class="about__image"
  >
  `;
}

export async function renderAboutShort() {
  const about = await getHomepage();

  document.querySelector('.about__image-box').insertAdjacentHTML('beforeend', createAboutShortImage(about.aboutImage));
  document.querySelector('.about__sticker').textContent = about.about_sticker;
  document.querySelector('.about__title').textContent = about.about_title;
  document.querySelector('.about__description').textContent = about.about_description;
};
