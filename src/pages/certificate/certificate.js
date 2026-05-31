import "@/style/main.scss";

import logo from "@/assets/image/logo.svg";
import logoFont from "@/assets/fonts/DelaGothicOne-Regular.woff2";
import telegramLogo from "@/assets/image/icons/telegram.svg";
import whatsappLogo from "@/assets/image/icons/whatsapp.svg";

import { setFavicon } from "@/utils/setFavicon";
import { burgerMenu } from "@/components/burgerMenu";
import { handleAccordion } from "@/handlers/handleAccordion";

import { getCertificatePage } from "@/api/getCertificatePage";

import { renderCta } from "@/render/renderCta";
import { renderHeroCertificate } from "@/render/renderHeroCertificate";
import { renderIntroCertificate } from "@/render/renderIntro";
import { renderGalleryCertificate } from "@/render/renderGalleryCertificate";
import { renderTrust } from "@/render/renderTrust";
import { renderInfoCertificate } from "@/render/renderInfoCertificate";


setFavicon(logo);
burgerMenu();

const certificatePage = await getCertificatePage();

await renderHeroCertificate();
await renderIntroCertificate();
await renderGalleryCertificate();
await renderTrust();
await renderInfoCertificate();
await renderCta(certificatePage);