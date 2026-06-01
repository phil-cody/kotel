import { getHomepage } from '@/api/getHomepage';
import { getServicesCards } from '@/api/getServicesCards';
import { API_URL } from '@/config/api';

function createCard(card) {
  return `
  <div class="services__card">
    <img
      src="${card.icon}"
      alt
      class="services__card-icon"
    >
    <h3 class="services__card-title">${card.title}</h3>
    <p class="services__card-description">${card.description}</p>
  </div>
  `;
}

export async function renderServices() {
  const services = await getHomepage();
  const servicesCards = await getServicesCards();

  document.querySelector('.services__title').textContent = services.services_title;
  document.querySelector('.services__description').textContent = services.services_description;
  document.querySelector('.services__more-info').insertAdjacentHTML('afterbegin', services.services_cta);

  const cardsBox = document.querySelector('.services__cards');

  servicesCards.forEach(card => cardsBox.insertAdjacentHTML('beforeend', createCard(card)));
};