import '@/style/main.scss';
import logo from '@/assets/image/logo.svg';
import logoFont from '@/assets/fonts/DelaGothicOne-Regular.woff2';
import telegramLogo from '@/assets/image/icons/telegram.svg';
import whatsappLogo from '@/assets/image/icons/whatsapp.svg';
import aboutImage from '@/assets/image/about-image.webp';
import servicesIconInstall from '@/assets/image/icons/installation.svg';
import servicesIconMaintenance from '@/assets/image/icons/maintenance.svg';
import servicesIconDiagnostics from '@/assets/image/icons/diagnostics.svg';
import servicesIconConsultation from '@/assets/image/icons/consultation.svg';
import { setFavicon } from '@/utils/setFavicon';
import { burgerMenu } from '@/components/burgerMenu';

setFavicon(logo);
burgerMenu();