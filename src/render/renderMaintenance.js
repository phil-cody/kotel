import { getBrandsList } from '@/api/getBrandsList';
import { getHomepage } from '@/api/getHomepage';

function createBrand(brand) {
  return `<div class="maintenance__brand-icon"><img
      src="${brand.icon}"
      alt
    ></div>`;
}

export async function renderMaintenance() {
  const maintenance = await getHomepage();
  const maintenanceBrands = await getBrandsList();

  document.querySelector('.maintenance__title').textContent = maintenance.maintenance_title;
  document.querySelector('.maintenance__description').textContent = maintenance.maintenance_description;

  const brandsBox = document.querySelector('.maintenance__brands');

  maintenanceBrands.forEach(brand => brandsBox.insertAdjacentHTML('beforeend', createBrand(brand)));
};