import { getCertificatePage } from '@/api/getCertificatePage';

export async function renderInfoCertificate() {
  const info = await getCertificatePage();

  const infoTitleEl = document.querySelector(".info__title");
  const infoDescriptionEl = document.querySelector(".info__description");

  infoTitleEl.textContent = info.info_title;
  infoDescriptionEl.textContent = info.info_description;
};