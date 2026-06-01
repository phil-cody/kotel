import "@/style/main.scss";

import logo from "@/assets/image/favicon.svg";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { getHomepage } from "@/api/getHomepage";

import { renderHero } from "@/render/renderHero";
import { renderAboutShort } from "@/render/renderAboutShort";
import { renderServices } from "@/render/renderServices";
import { renderPrevention } from "@/render/renderPrevention";
import { renderMaintenance } from "@/render/renderMaintenance";
import { renderCta } from "@/render/renderCta";
import { renderFaq } from "@/render/renderFaq";
import { renderContacts } from "@/render/renderContacts";

setFavicon(logo);
burgerMenu();

const homepage = await getHomepage();

await renderHero(homepage);
await renderAboutShort();
await renderServices();
await renderPrevention(homepage);
await renderMaintenance();
await renderCta(homepage);
await renderFaq();
handleAccordion();
await renderContacts();