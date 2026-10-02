import { getCertificatePage } from '@/api/getCertificatePage';

function createIcon(page) {
  return `<img
      src="${page.intro_icon}"
      alt
    />`;
}

export async function renderIntroCertificate() {
  const intro = await getCertificatePage();

  const introTitleEl = document.querySelector(".intro-title");
  const introDescriptionEl = document.querySelector(".intro-description");
  const introBox = document.querySelector('.intro-header');

  introBox.insertAdjacentHTML('afterbegin', createIcon(intro));
  introTitleEl.textContent = intro.intro_title;
  introDescriptionEl.textContent = intro.intro_description;
};
