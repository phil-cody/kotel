import { getHomepage } from '@/api/getHomepage';

export async function renderHero() {
  const hero = await getHomepage();

  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");
  const heroCtaEl = document.querySelector(".hero__phone");

  heroTitleEl.textContent = hero.Hero_title;
  heroDescriptionEl.textContent = hero.Hero_description;
  heroCtaEl.textContent = hero.Hero_cta;
};
