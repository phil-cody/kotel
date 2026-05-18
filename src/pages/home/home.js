import '@/style/main.scss';

import logo from '@/assets/image/logo.svg';
import logoFont from '@/assets/fonts/DelaGothicOne-Regular.woff2';
import telegramLogo from '@/assets/image/icons/telegram.svg';
import whatsappLogo from '@/assets/image/icons/whatsapp.svg';

import { setFavicon } from '@/utils/setFavicon';
import { burgerMenu } from '@/components/burgerMenu';
import { handleAccordion } from '@/handlers/handleAccordion';

import { renderHero } from '@/render/renderHero';
import { renderAboutShort } from '@/render/renderAboutShort';
import { renderServices } from '@/render/renderServices';
import { renderMaintenance } from '@/render/renderMaintenance';
import { renderFaq } from '@/render/renderFaq';
import { renderContacts } from '@/render/renderContacts';

setFavicon(logo);
burgerMenu();

renderHero();
renderAboutShort();
renderServices();
renderMaintenance();
renderFaq();
handleAccordion();
renderContacts();