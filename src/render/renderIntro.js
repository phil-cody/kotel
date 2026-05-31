import { getCertificatePage } from '@/api/getCertificatePage';

export async function renderIntroCertificate() {
  const certificatePage = await getCertificatePage();

  const introTitleEl = document.querySelector(".intro__title");
  const introDescriptionEl = document.querySelector(".intro__description");

  introTitleEl.textContent = certificatePage.intro_title;
  introDescriptionEl.textContent = certificatePage.intro_description;
};