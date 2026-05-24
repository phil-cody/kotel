import { getPricePage } from '@/api/getPricePage';

export async function renderHeroPrices() {
  const hero = await getPricePage();

  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");
  const heroCtaEl = document.querySelector(".hero__phone");

  heroTitleEl.textContent = hero.hero_title;
  heroDescriptionEl.textContent = hero.hero_description;
  heroCtaEl.textContent = hero.hero_cta;
};
