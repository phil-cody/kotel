import { API_URL } from "@/config/api";

export async function getContactsCardsLink() {
  try {
    const response = await fetch(`${API_URL}/items/contacts_cards_link`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки contacts_cards_link');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getContactsCardsText() {
  try {
    const response = await fetch(`${API_URL}/items/contacts_cards_text`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки contacts_cards_text');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}