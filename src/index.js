import '@/style/main.scss';
import logo from '@/image/logo.svg';
import telegramLogo from '@/image/icons/telegram.svg';
import whatsappLogo from '@/image/icons/whatsapp.svg';
import { setFavicon } from '@/modules/utils/setFavicon';
import { burgerMenu } from '@/modules/services/burgerMenu';

setFavicon(logo);
burgerMenu();