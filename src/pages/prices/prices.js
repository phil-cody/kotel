import "@/style/main.scss";

import logo from "@/assets/image/logo.svg";
import logoFont from "@/assets/fonts/DelaGothicOne-Regular.woff2";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { renderHeroPrices } from "@/render/renderHeroPrices";
import { renderFaq } from "@/render/renderFaq";
import { renderContacts } from "@/render/renderContacts";

setFavicon(logo);
burgerMenu();

await renderHeroPrices();
await renderFaq();
handleAccordion();
await renderContacts();