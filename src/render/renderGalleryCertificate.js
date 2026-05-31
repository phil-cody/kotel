import { getCertificateList } from '@/api/getCertificateList';
import { API_URL} from '@/config/api';

function createCard(item) {
  return `
    <a href="${item.image}" target="_blank" class="gallery__card">
      <img src="${API_URL}/assets/${item.image}" alt/>
      <h3 class="gallery__card-title">
        ${item.title}
      </h3>
    </a>
  `;
}

export async function renderGalleryCertificate() {
  const gallery = await getCertificateList();
  
  const galleryBox = document.querySelector('.gallery__box');

  gallery.forEach(item => galleryBox.insertAdjacentHTML('beforeend', createCard(item)));
};