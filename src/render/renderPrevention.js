import { API_URL } from '@/config/api';

function createIcon(page) {
  return `<img
      src="${API_URL}/assets/${page.prevention_icon}"
      alt
    />`;
}

export async function renderPrevention(page) {

  document.querySelector('.prevention__title').textContent = page.prevention_title;
  document.querySelector('.prevention__description').textContent = page.prevention_description;
  document.querySelector('.prevention__icon-box').insertAdjacentHTML('beforeend', createIcon(page));
};