import { contactsCardsText } from "@/data/contacts_cards_text";
import { contactsCardsLink } from "@/data/contacts_cards_link";

export async function getContactsCardsLink() {
  return contactsCardsLink;
}

export async function getContactsCardsText() {
  return contactsCardsText;
}

