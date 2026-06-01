import phoneIcon from "@/assets/image/icons/contacts-phone.svg";
import mailIcon from "@/assets/image/icons/contacts-mail.svg";
import messengerIcon from "@/assets/image/icons/contacts-messenger.svg";

export const contactsCardsLink = [
  {
    id: 1,
    title: "Номера телефонов для связи",
    links: [
      {
        href: "tel:+79114734089",
        value: "+79114734089",
      },
      {
        href: "tel:+74012901416",
        value: "+74012901416",
      },
    ],
    icon: phoneIcon,
  },
  {
    id: 2,
    title: "Электронная почта",
    links: [
      {
        href: "mailto:kotel3975@mail.ru",
        value: "kotel3975@mail.ru",
      },
    ],
    icon: mailIcon,
  },
  {
    id: 3,
    title: "Мессенджеры",
    links: [
      {
        href: "https://wa.me/+79114734089",
        value: "WhatsApp",
      },
      {
        href: "https://t.me/+79114734089",
        value: "Telegram",
      },
    ],
    icon: messengerIcon,
  },
];
