import { getCertificatePage } from '@/api/getCertificatePage';
import { API_URL } from '@/config/api';

function createIcon(page) {
  return `<img
      src="${page.info_icon}"
      alt
    />`;
}

export async function renderInfoCertificate() {
  const info = await getCertificatePage();

  const infoTitleEl = document.querySelector(".info-title");
  const infoDescriptionEl = document.querySelector(".info-description");
  const infoBox = document.querySelector('.info-header');

  infoBox.insertAdjacentHTML('afterbegin', createIcon(info));
  infoTitleEl.textContent = info.info_title;
  infoDescriptionEl.textContent = info.info_description;
};