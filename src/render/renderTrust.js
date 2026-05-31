import { getTrustCards } from '@/api/getTrustCards';
import { getCertificatePage } from '@/api/getCertificatePage';
import { API_URL} from '@/config/api';

function createCard(card) {
  return `
  <div class="services__card">
    <img
      src="${API_URL}/assets/${card.trust_icon}"
      alt
      class="services__card-icon"
    >
    <h3 class="services__card-title">${card.trust_title}</h3>
    <p class="services__card-description">${card.trust_description}</p>
  </div>
  `;
}

export async function renderTrust() {
  const trustCards = await getTrustCards();
  const certificatePage = await getCertificatePage();

  const trustBox = document.querySelector('.trust__box');
  const trustTitleEl = document.querySelector(".trust__title");
  console.log(trustCards)
  trustTitleEl.textContent = certificatePage.trust_title;
  trustCards.forEach(card => trustBox.insertAdjacentHTML('beforeend', createCard(card)));
};