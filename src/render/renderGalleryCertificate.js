import { getCertificateList } from '@/api/getCertificateList';
import { API_URL} from '@/config/api';

function createCard(item) {
  return `
    <a href="${API_URL}/assets/${item.image}" target="_blank" class="gallery__card">
      <div class="gallery__image-box">
        <img src="${API_URL}/assets/${item.image}" alt/>
      </div>
      <h3 class="gallery__card-title">
        ${item.title}
      </h3>
    </a>
  `;
}

export async function renderGalleryCertificate() {
  const gallery = await getCertificateList();
  
  const galleryBox = document.querySelector('.gallery');

  gallery.forEach(item => galleryBox.insertAdjacentHTML('beforeend', createCard(item)));
};