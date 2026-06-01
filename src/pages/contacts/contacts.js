import "@/style/main.scss";

import logo from "@/assets/image/favicon.svg";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { getContactsPage } from "@/api/getContactsPage";

import { renderHero } from "@/render/renderHero";
import { renderContacts } from "@/render/renderContacts";
import { renderCta } from "@/render/renderCta";

setFavicon(logo);
burgerMenu();

const contactsPage = await getContactsPage();

await renderHero(contactsPage);
await renderContacts();
await renderCta(contactsPage);