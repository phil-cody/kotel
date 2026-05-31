import "@/style/main.scss";

import logo from "@/assets/image/logo.svg";
import logoFont from "@/assets/fonts/DelaGothicOne-Regular.woff2";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { getPricePage } from "@/api/getPricePage";

import { renderHeroPrices } from "@/render/renderHeroPrices";
import { renderPrices } from "@/render/renderPrices";
import { renderPrevention } from "@/render/renderPrevention";
import { renderCta } from "@/render/renderCta";

const pricePage = await getPricePage();

setFavicon(logo);
burgerMenu();

await renderHeroPrices();
await renderPrices();
await renderPrevention(pricePage);
await renderCta(pricePage);