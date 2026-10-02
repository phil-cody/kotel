import { getCertificateList } from '@/api/getCertificateList';

function createCard(item) {
  return `
    <a href="${item.image}" target="_blank" class="gallery__card">
      <div class="gallery__image-box">
        <img src="${item.image}" alt/>
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
