import "@/style/main.scss";

import logo from "@/assets/image/favicon.svg";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { getPricePage } from "@/api/getPricePage";

import { renderHero } from "@/render/renderHero";
import { renderPrices } from "@/render/renderPrices";
import { renderPrevention } from "@/render/renderPrevention";
import { renderCta } from "@/render/renderCta";

const pricePage = await getPricePage();

setFavicon(logo);
burgerMenu();

await renderHero(pricePage);
await renderPrices();
await renderPrevention(pricePage);
await renderCta(pricePage);