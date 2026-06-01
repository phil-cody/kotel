import { getHomepage } from '@/api/getHomepage';

export async function renderHero(page) {
  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");
  const heroCtaEl = document.querySelector(".hero__phone");

  heroTitleEl.textContent = page.hero_title;
  heroDescriptionEl.textContent = page.hero_description;
  if (page.hero_cta) heroCtaEl.textContent = page.hero_cta;
};
