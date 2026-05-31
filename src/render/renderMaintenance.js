import { getBrandsList } from '@/api/getBrandsList';
import { getHomepage } from '@/api/getHomepage';
import { API_URL } from '@/config/api';

function createBrand(brand) {
  return `<a href="../brands/brands.html" class="maintenance__brand-icon"><img
      src="${API_URL}/assets/${brand.icon}"
      alt
    ></a>`;
}

export async function renderMaintenance() {
  const maintenance = await getHomepage();
  const maintenanceBrands = await getBrandsList();

  document.querySelector('.maintenance__title').textContent = maintenance.maintenance_title;
  document.querySelector('.maintenance__description').textContent = maintenance.maintenance_description;
  document.querySelector('.maintenance__more-info').insertAdjacentHTML('afterbegin', maintenance.maintenance_cta);

  const brandsBox = document.querySelector('.maintenance__brands');

  maintenanceBrands.forEach(brand => brandsBox.insertAdjacentHTML('beforeend', createBrand(brand)));
};