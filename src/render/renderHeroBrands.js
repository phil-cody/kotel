import { getBrandsPage } from '@/api/getBrandsPage';

export async function renderHeroBrands() {
  const hero = await getBrandsPage();

  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");
  const heroCtaEl = document.querySelector(".hero__phone");

  heroTitleEl.textContent = hero.hero_title;
  heroDescriptionEl.textContent = hero.hero_description;
  heroCtaEl.textContent = hero.hero_cta;
};
