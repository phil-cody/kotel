import { getCertificatePage } from '@/api/getCertificatePage';

export async function renderHeroCertificate() {
  const hero = await getCertificatePage();

  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");

  heroTitleEl.textContent = hero.hero_title;
  heroDescriptionEl.textContent = hero.hero_description;
};