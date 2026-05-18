import { home } from '@/test-data/homePage';

function createCard(card) {
  return `
  <div class="services__card">
    <img
      src="${card.icon.src}"
      alt="${card.icon.alt}"
      class="services__card-icon"
    >
    <h3 class="services__card-title">${card.title}</h3>
    <p class="services__card-description">${card.description}</p>
  </div>
  `;
}

export const renderServices = () => {
  document.querySelector('.services__title').textContent = home.services.title;
  document.querySelector('.services__description').textContent = home.services.description;
  document.querySelector('.services__more-info').insertAdjacentHTML('afterbegin', home.services.cta);

  const cardsBox = document.querySelector('.services__cards');

  home.services.cards.forEach(card => {
    cardsBox.insertAdjacentHTML("beforeend", createCard(card));
  });
};