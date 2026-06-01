import { getContactsCardsLink, getContactsCardsText } from "@/api/getContactsCards";
import { getHomepage } from '@/api/getHomepage';
import { API_URL } from "@/config/api";

function createIcon(card) {
  return `
    <img
      src="${card.icon}"
      alt="${card.title}"
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
      ${createIcon(card)}
      <div class="contacts__card-text">
        <h3 class="contacts__card-title">
          ${card.title}
        </h3>
        <div class="contacts__card-links">
          ${createLinks(card.links)}
        </div>
      </div>
    </div>
  `;
}

function createParaCard(card) {
  return `
    <div class="contacts__card para">
      ${createIcon(card)}
      <div class="contacts__card-text">
        <h3 class="contacts__card-title">
          ${card.title}
        </h3>
        <p
          class="contacts__card-para"
        >
          ${card.content}
        </p>
      </div>
    </div>
  `;
}

export async function renderContacts() {
  const contacts = await getHomepage();
  const contactsCardsLink = await getContactsCardsLink();
  const contactsCardsText = await getContactsCardsText();

  document.querySelector(".contacts__title").textContent = contacts.contacts_title;

  const cardsBox = document.querySelector(".contacts__cards");

  contactsCardsText.forEach((card) => {
    cardsBox.insertAdjacentHTML("beforeend", createParaCard(card));
  });

  contactsCardsLink.forEach((card) => {
    cardsBox.insertAdjacentHTML("beforeend", createLinkCard(card));
  });
};
