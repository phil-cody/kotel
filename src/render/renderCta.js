import { API_URL } from '@/config/api';

export async function renderCta(page) {

  document.querySelector('.cta__title').textContent = page.cta_title;
  document.querySelector('.cta__description').textContent = page.cta_description;
};