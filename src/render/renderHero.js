import { home } from '@/test-data/homePage';

export const renderHero = () => {
  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");
  const heroCtaEl = document.querySelector(".hero__phone");

  heroTitleEl.textContent = home.hero.title;
  heroDescriptionEl.textContent = home.hero.description;
  heroCtaEl.textContent = home.hero.cta;
};
