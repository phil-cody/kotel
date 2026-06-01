import "@/style/main.scss";

import logo from "@/assets/image/favicon.svg";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { getCertificatePage } from "@/api/getCertificatePage";

import { renderCta } from "@/render/renderCta";
import { renderHero } from "@/render/renderHero";
import { renderIntroCertificate } from "@/render/renderIntro";
import { renderGalleryCertificate } from "@/render/renderGalleryCertificate";
import { renderTrust } from "@/render/renderTrust";
import { renderInfoCertificate } from "@/render/renderInfoCertificate";


setFavicon(logo);
burgerMenu();

const certificatePage = await getCertificatePage();

await renderHero(certificatePage);
await renderIntroCertificate();
await renderGalleryCertificate();
await renderTrust();
await renderInfoCertificate();
await renderCta(certificatePage);