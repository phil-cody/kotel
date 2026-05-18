import { home } from '@/test-data/homePage';

function createBrand(brand) {
  return `<p class="maintenance__brand-item">${brand}</p>`;
}

export const renderMaintenance = () => {
  document.querySelector('.maintenance__title').textContent = home.maintenance.title;
  document.querySelector('.maintenance__description').textContent = home.maintenance.description;
  document.querySelector('.maintenance__more-info').insertAdjacentHTML('afterbegin', home.maintenance.cta);

  const brandsBox = document.querySelector('.maintenance__brands');

  home.maintenance.brands.forEach(brand => brandsBox.insertAdjacentHTML('beforeend', createBrand(brand)));
};