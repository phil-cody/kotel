import { home } from "@/test-data/homePage";

function createIcon(icon) {
  return `
    <img
      src="${icon.src}"
      alt="${icon.alt}"
      class="contacts__card-icon"
    >
  `;
}

function createLinks(links) {
  return links
    .map(link => {
      return `
        <a
          href="${link.href}"
          class="contacts__card-link"
        >
          ${link.value}
        </a>
      `;
    })
    .join('');
}

function createLinkCard(card) {
  return `
    <div class="contacts__card link">
      ${createIcon(card.icon)}
      <div class="contacts__card-text">
        <h3 class="contacts__card-title">
          ${card.title}
        </h3>
        <div class="contacts__card-links">
          ${createLinks(card.anchors)}
        </div>
      </div>
    </div>
  `;
}

function createParaCard(card) {
  return `
    <div class="contacts__card para">
      ${createIcon(card.icon)}
      <div class="contacts__card-text">
        <h3 class="contacts__card-title">
          ${card.title}
        </h3>
        <p
          class="contacts__card-para"
        >
          ${card.value}
        </p>
      </div>
    </div>
  `;
}

export const renderContacts = () => {
  document.querySelector(".contacts__title").textContent = home.contacts.title;

  const cardsBox = document.querySelector(".contacts__cards");

  Object.values(home.contacts.cards.para).forEach((card) => {
    cardsBox.insertAdjacentHTML("beforeend", createParaCard(card));
  });

  Object.values(home.contacts.cards.links).forEach((card) => {
    cardsBox.insertAdjacentHTML("beforeend", createLinkCard(card));
  });
};
