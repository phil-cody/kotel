/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss"
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/assets/fonts/DelaGothicOne-Regular.woff2"
/*!******************************************************!*\
  !*** ./src/assets/fonts/DelaGothicOne-Regular.woff2 ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/DelaGothicOne-Regular.dafd4e0f79b2995e6346.woff2";

/***/ },

/***/ "./src/assets/image/about-image.webp"
/*!*******************************************!*\
  !*** ./src/assets/image/about-image.webp ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-image.ff7456c61ce2cbc98ef9.webp";

/***/ },

/***/ "./src/assets/image/icons/consultation.svg"
/*!*************************************************!*\
  !*** ./src/assets/image/icons/consultation.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/consultation.f47555360bd377997a56.svg";

/***/ },

/***/ "./src/assets/image/icons/contacts-area.svg"
/*!**************************************************!*\
  !*** ./src/assets/image/icons/contacts-area.svg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-area.8478edaf0a5811af2660.svg";

/***/ },

/***/ "./src/assets/image/icons/contacts-hours.svg"
/*!***************************************************!*\
  !*** ./src/assets/image/icons/contacts-hours.svg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-hours.2162a23ac9aa2e0e3edd.svg";

/***/ },

/***/ "./src/assets/image/icons/contacts-mail.svg"
/*!**************************************************!*\
  !*** ./src/assets/image/icons/contacts-mail.svg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-mail.430cd0fb96caff8bff61.svg";

/***/ },

/***/ "./src/assets/image/icons/contacts-messenger.svg"
/*!*******************************************************!*\
  !*** ./src/assets/image/icons/contacts-messenger.svg ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-messenger.0e94e7535105e2db711c.svg";

/***/ },

/***/ "./src/assets/image/icons/contacts-phone.svg"
/*!***************************************************!*\
  !*** ./src/assets/image/icons/contacts-phone.svg ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-phone.c309c581671e726bec2f.svg";

/***/ },

/***/ "./src/assets/image/icons/diagnostics.svg"
/*!************************************************!*\
  !*** ./src/assets/image/icons/diagnostics.svg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diagnostics.d6ae9059bf9b5d0d33ad.svg";

/***/ },

/***/ "./src/assets/image/icons/installation.svg"
/*!*************************************************!*\
  !*** ./src/assets/image/icons/installation.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/installation.16793717c72e6c633035.svg";

/***/ },

/***/ "./src/assets/image/icons/maintenance.svg"
/*!************************************************!*\
  !*** ./src/assets/image/icons/maintenance.svg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maintenance.76aca5da1bd25d48a79a.svg";

/***/ },

/***/ "./src/assets/image/icons/open-icon.svg"
/*!**********************************************!*\
  !*** ./src/assets/image/icons/open-icon.svg ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/open-icon.b758de8dd0d9c0f04897.svg";

/***/ },

/***/ "./src/assets/image/icons/telegram.svg"
/*!*********************************************!*\
  !*** ./src/assets/image/icons/telegram.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/telegram.4c392bb82e3173650284.svg";

/***/ },

/***/ "./src/assets/image/icons/whatsapp.svg"
/*!*********************************************!*\
  !*** ./src/assets/image/icons/whatsapp.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/whatsapp.4c4c8879c12e5979e98f.svg";

/***/ },

/***/ "./src/assets/image/logo.svg"
/*!***********************************!*\
  !*** ./src/assets/image/logo.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.74b428cae23d41587ad0.svg";

/***/ },

/***/ "./src/components/burgerMenu.js"
/*!**************************************!*\
  !*** ./src/components/burgerMenu.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)
/* harmony export */ });
const burgerMenu = () => {
  const modal = document.querySelector(".header__form-modal");

  const menu = document.querySelector(".burger-menu");
  const burgerBtn = document.querySelector(".header__burger");

  const overlay = document.querySelector(".header__overlay");
  
  let isMenuOpen = false;

  function openMenu() {

    menu.classList.add("burger-menu__open");
    overlay.classList.add("active");

    isMenuOpen = true;
  }

  function closeMenu() {
    menu.classList.remove("burger-menu__open");
    overlay.classList.remove("active");
    isMenuOpen = false;
  }

  burgerBtn.addEventListener("click", openMenu);

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      isMenuOpen &&
      (target.classList.contains("header__overlay") ||
        target.classList.contains("burger-menu__close") ||
        target.closest(".burger-menu__close"))
    ) {
      closeMenu();
    }
  });
};


/***/ },

/***/ "./src/handlers/handleAccordion.js"
/*!*****************************************!*\
  !*** ./src/handlers/handleAccordion.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAccordion: () => (/* binding */ handleAccordion)
/* harmony export */ });
const handleAccordion = () => {
  const accordBlocks = document.querySelectorAll(".accordion");

  accordBlocks.forEach((block) => {
    const item = block.querySelector(".accordion-item");

    block.addEventListener("click", (e) => {
      const isActive = block.classList.contains("active");

      accordBlocks.forEach((b) => {
        b.classList.remove("active");
        const otherItem = b.querySelector(".accordion-item");
        otherItem.style.maxHeight = null;
      });

      if (!isActive) {
        block.classList.add("active");
        item.style.maxHeight = item.scrollHeight + "px";
      }
    });
  });
};


/***/ },

/***/ "./src/render/renderAboutShort.js"
/*!****************************************!*\
  !*** ./src/render/renderAboutShort.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAboutShort: () => (/* binding */ renderAboutShort)
/* harmony export */ });
/* harmony import */ var _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/test-data/homePage */ "./src/test-data/homePage.js");


function createAboutShortImage(image) {
  return `
  <img 
    src="${image.src}"
    alt="${image.alt}"
    class="about__image"
  >
  `;
}

const renderAboutShort = () => {
  document.querySelector('.about__image-box').insertAdjacentHTML('beforeend', createAboutShortImage(_test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.about.img));
  document.querySelector('.about__sticker').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.about.sticker;
  document.querySelector('.about__title').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.about.title;
  document.querySelector('.about__description').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.about.description;
  document.querySelector('.about__more-info').insertAdjacentHTML('afterbegin', _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.about.cta);
};

/***/ },

/***/ "./src/render/renderContacts.js"
/*!**************************************!*\
  !*** ./src/render/renderContacts.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContacts: () => (/* binding */ renderContacts)
/* harmony export */ });
/* harmony import */ var _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/test-data/homePage */ "./src/test-data/homePage.js");


function createIcon(icon) {
  return `
    <img
      src="${icon.src}"
      alt="${icon.alt}"
      class="contacts__card-icon"
    >
  `;
}

function createLinks(links) {
  return links
    .map(link => {
      return `
        <a
          href="${link.href}"
          class="contacts__card-link"
        >
          ${link.value}
        </a>
      `;
    })
    .join('');
}

function createLinkCard(card) {
  return `
    <div class="contacts__card link">
      ${createIcon(card.icon)}
      <div class="contacts__card-text">
        <h3 class="contacts__card-title">
          ${card.title}
        </h3>
        <div class="contacts__card-links">
          ${createLinks(card.anchors)}
        </div>
      </div>
    </div>
  `;
}

function createParaCard(card) {
  return `
    <div class="contacts__card para">
      ${createIcon(card.icon)}
      <div class="contacts__card-text">
        <h3 class="contacts__card-title">
          ${card.title}
        </h3>
        <p
          class="contacts__card-para"
        >
          ${card.value}
        </p>
      </div>
    </div>
  `;
}

const renderContacts = () => {
  document.querySelector(".contacts__title").textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.contacts.title;

  const cardsBox = document.querySelector(".contacts__cards");

  Object.values(_test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.contacts.cards.para).forEach((card) => {
    cardsBox.insertAdjacentHTML("beforeend", createParaCard(card));
  });

  Object.values(_test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.contacts.cards.links).forEach((card) => {
    cardsBox.insertAdjacentHTML("beforeend", createLinkCard(card));
  });
};


/***/ },

/***/ "./src/render/renderFaq.js"
/*!*********************************!*\
  !*** ./src/render/renderFaq.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFaq: () => (/* binding */ renderFaq)
/* harmony export */ });
/* harmony import */ var _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/test-data/homePage */ "./src/test-data/homePage.js");
/* harmony import */ var _assets_image_icons_open_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/image/icons/open-icon.svg */ "./src/assets/image/icons/open-icon.svg");



function createFaqItem(item) {
  return `<div class="faq__block accordion">
            <div class="faq__text">
              <h3 class="faq__question">${item.question}</h3>
              <div class="faq__answer accordion-item">${item.answer}</div>
            </div>
            <img 
              class="faq__open"
              src="${_test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.faq.openIcon.src}"
              alt
            />
          </div>`;
}

const renderFaq = () => {
  document.querySelector('.faq__title').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.faq.title;

  const faqBox = document.querySelector('.faq__content');

  _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.faq.questions.forEach(item => {
    faqBox.insertAdjacentHTML('beforeend', createFaqItem(item));
  });
};

/***/ },

/***/ "./src/render/renderHero.js"
/*!**********************************!*\
  !*** ./src/render/renderHero.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHero: () => (/* binding */ renderHero)
/* harmony export */ });
/* harmony import */ var _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/test-data/homePage */ "./src/test-data/homePage.js");


const renderHero = () => {
  const heroTitleEl = document.querySelector(".hero__title");
  const heroDescriptionEl = document.querySelector(".hero__description");
  const heroCtaEl = document.querySelector(".hero__phone");

  heroTitleEl.textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.hero.title;
  heroDescriptionEl.textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.hero.description;
  heroCtaEl.textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.hero.cta;
};


/***/ },

/***/ "./src/render/renderMaintenance.js"
/*!*****************************************!*\
  !*** ./src/render/renderMaintenance.js ***!
  \*****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMaintenance: () => (/* binding */ renderMaintenance)
/* harmony export */ });
/* harmony import */ var _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/test-data/homePage */ "./src/test-data/homePage.js");


function createBrand(brand) {
  return `<p class="maintenance__brand-item">${brand}</p>`;
}

const renderMaintenance = () => {
  document.querySelector('.maintenance__title').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.maintenance.title;
  document.querySelector('.maintenance__description').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.maintenance.description;
  document.querySelector('.maintenance__more-info').insertAdjacentHTML('afterbegin', _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.maintenance.cta);

  const brandsBox = document.querySelector('.maintenance__brands');

  _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.maintenance.brands.forEach(brand => brandsBox.insertAdjacentHTML('beforeend', createBrand(brand)));
};

/***/ },

/***/ "./src/render/renderServices.js"
/*!**************************************!*\
  !*** ./src/render/renderServices.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderServices: () => (/* binding */ renderServices)
/* harmony export */ });
/* harmony import */ var _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/test-data/homePage */ "./src/test-data/homePage.js");


function createCard(card) {
  return `
  <div class="services__card">
    <img
      src="${card.icon.src}"
      alt="${card.icon.alt}"
      class="services__card-icon"
    >
    <h3 class="services__card-title">${card.title}</h3>
    <p class="services__card-description">${card.description}</p>
  </div>
  `;
}

const renderServices = () => {
  document.querySelector('.services__title').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.services.title;
  document.querySelector('.services__description').textContent = _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.services.description;
  document.querySelector('.services__more-info').insertAdjacentHTML('afterbegin', _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.services.cta);

  const cardsBox = document.querySelector('.services__cards');

  _test_data_homePage__WEBPACK_IMPORTED_MODULE_0__.home.services.cards.forEach(card => {
    cardsBox.insertAdjacentHTML("beforeend", createCard(card));
  });
};

/***/ },

/***/ "./src/test-data/homePage.js"
/*!***********************************!*\
  !*** ./src/test-data/homePage.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_image_icons_installation_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/image/icons/installation.svg */ "./src/assets/image/icons/installation.svg");
/* harmony import */ var _assets_image_icons_maintenance_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/image/icons/maintenance.svg */ "./src/assets/image/icons/maintenance.svg");
/* harmony import */ var _assets_image_icons_diagnostics_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/image/icons/diagnostics.svg */ "./src/assets/image/icons/diagnostics.svg");
/* harmony import */ var _assets_image_icons_consultation_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/image/icons/consultation.svg */ "./src/assets/image/icons/consultation.svg");
/* harmony import */ var _assets_image_icons_contacts_area_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/image/icons/contacts-area.svg */ "./src/assets/image/icons/contacts-area.svg");
/* harmony import */ var _assets_image_icons_contacts_phone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/image/icons/contacts-phone.svg */ "./src/assets/image/icons/contacts-phone.svg");
/* harmony import */ var _assets_image_icons_contacts_mail_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/image/icons/contacts-mail.svg */ "./src/assets/image/icons/contacts-mail.svg");
/* harmony import */ var _assets_image_icons_contacts_hours_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/image/icons/contacts-hours.svg */ "./src/assets/image/icons/contacts-hours.svg");
/* harmony import */ var _assets_image_icons_contacts_messenger_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/image/icons/contacts-messenger.svg */ "./src/assets/image/icons/contacts-messenger.svg");
/* harmony import */ var _assets_image_icons_open_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/image/icons/open-icon.svg */ "./src/assets/image/icons/open-icon.svg");
/* harmony import */ var _assets_image_about_image_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/image/about-image.webp */ "./src/assets/image/about-image.webp");












const home = {
  hero: {
    title: `Профессиональный ремонт отопительного оборудования`,
    description: `Обслуживаем котлы, колонки и системы отопления различных производителей. Быстрый выезд, консультации и помощь в запуске оборудования.`,
    cta: `Позвонить сейчас`,
  },
  about: {
    img: {
      src: _assets_image_about_image_webp__WEBPACK_IMPORTED_MODULE_10__,
      alt: "",
    },
    sticker: `О компании`,
    title: `Более 25 лет обслуживаем отопительное оборудование в Калининграде`,
    description: `С 1999 года выполняем монтаж, ремонт и обслуживание газовых котлов, колонок и систем отопления для частных домов и квартир. Работаем официально, с допуском к газоопасным работам, предоставляем гарантию на услуги и запчасти, а также помогаем клиентам подобрать надёжные решения для стабильной и безопасной работы оборудования.`,
    cta: `Подробнее о компании `,
  },
  services: {
    title: `Услуги по ремонту и обслуживанию отопительного оборудования`,
    description: `Монтаж, диагностика, сервисное обслуживание и ремонт котлов, колонок и систем отопления. Более 25 лет обслуживаем отопительное оборудование в Калининграде и области.`,
    cards: [
      {
        icon: {
          src: _assets_image_icons_installation_svg__WEBPACK_IMPORTED_MODULE_0__,
          alt: "",
        },
        title: `Монтаж котлов`,
        description: `Установка газовых и электрических котлов популярных брендов с подключением, настройкой и проверкой работы оборудования.`,
      },
      {
        icon: {
          src: _assets_image_icons_maintenance_svg__WEBPACK_IMPORTED_MODULE_1__,
          alt: "",
        },
        title: `Обслуживание оборудования`,
        description: `Плановое сервисное обслуживание, чистка и профилактика отопительных систем для стабильной и безопасной работы.`,
      },
      {
        icon: {
          src: _assets_image_icons_diagnostics_svg__WEBPACK_IMPORTED_MODULE_2__,
          alt: "",
        },
        title: `Диагностика и ремонт`,
        description: `Поиск неисправностей, ремонт и замена комплектующих газовых котлов, колонок и отопительного оборудования.`,
      },
      {
        icon: {
          src: _assets_image_icons_consultation_svg__WEBPACK_IMPORTED_MODULE_3__,
          alt: "",
        },
        title: `Консультация и подбор`,
        description: `Помощь в подборе оборудования, консультации по эксплуатации и рекомендации по обслуживанию систем отопления.`,
      },
    ],
    cta: `Ознакомиться с перечнем и стоимостью услуг `,
  },
  maintenance: {
    title: `Бренды котлов и колонок, с которыми мы работаем`,
    description: `Обслуживаем, диагностируем и ремонтируем оборудование популярных производителей отопительной техники.`,
    brands: [
      `Ariston`,
      `Vaillant`,
      `Roc`,
      `Bosch`,
      `Beretta`,
      `Kentatsu`,
      `Hybert`,
    ],
    cta: `Все бренды и подробности обслуживания `,
  },
  faq: {
    title: `Часто задаваемые вопросы`,
    questions: [
      {
        question: `Что делать, если не работает котёл?`,
        answer: `<p>Если не работает котёл, в первую очередь проверьте наличие
                    электричества, газа и воды, перезагрузите его, проверьте
                    дисплей на наличие кода ошибки и убедитесь, что дымоход не
                    забит. При запахе газа немедленно звоните 104 или 112.</p>
                  <p><b>Основные шаги по устранению неисправностей:</b></p>
                  <ol>
                    <li>
                      <b>Проверка электропитания:</b> Котёл может не включаться и
                      отсутствия питания, перегоревших предохранителей или
                      сработавшего стабилизатора.
                    </li>
                    <li>
                      <b>Перезагрузка (RESET):</b> Нажмите кнопку перезапуска, 
                      котёл ушёл в аварийный режим.
                    </li>
                    <li>
                      <b>Проверка давления воды:</b> Если давление в системе отопл
                      ниже нормы (обычно < 1 бар), котёл не включится. Нужно
                      подпитать систему водой.
                    </li>
                    <li>
                      <b>Очистка дымохода:</b> При засорении дымохода сажей или л
                      срабатывает датчик тяги, и котёл выключается.
                    </li>
                    <li>
                      <b>Ошибка на дисплее:</b> Найдите код ошибки в инструкции —
                      укажет на конкретную поломку (датчик, насос, розжиг).
                    </li>
                  </ol>`,
      },
      {
        question: `Как поднять давление в котле?`,
        answer: `<p>
                    Чтобы поднять давление в котле, необходимо открыть кран
                    подпитки (обычно находится снизу котла, часто чёрного или
                    синего цвета) и залить воду, пока манометр не покажет 1,2-1,5
                    бар. После достижения нужного уровня кран следует плотно
                    закрыть.
                  </p>
                  <p><b>Пошаговая инструкция:</b></p>
                  <ol>
                    <b><li>Остановите котёл:</b> Выключите прибор, дайте ему остыть.</li>
                    <li>
                      <b>Найдите кран подпитки:</b> На нижней части котла найдите
                      пластиковый клапан (иногда совмещён с гибким шлангом).
                    </li>
                    <li>
                      <b>Откройте кран:</b> Медленно поверните кран, чтобы вода из
                      водопровода начала поступать в систему отопления.
                    </li>
                    <li>
                      <b>Следите за манометром:</b> Поднимайте давление до отметки
                      1,2-1,5 бар. Не превышайте 2 бар, чтобы избежать сброса
                      через аварийный клапан.
                    </li>
                    <li>
                      <b>Закройте кран:</b> Как только давление стабилизируется, плотно
                      закройте кран.
                    </li>
                    <li>
                      <b>Включите котёл:</b> Включите прибор и проверьте наличие воздуха.
                    </li>
                  </ol>
                  <p>
                    Если чувствуется запах газа или гари, котёл выдаёт критическую
                    ошибку, которую не удаётся сбросить или повреждены внутренние
                    компоненты (насос, теплообменник) — рекомендуется вызвать
                    специалиста.
                  </p>`,
      },
      {
        question: `Что делать, если давление снова падает?`,
        answer: `<p>
                    <b>Проверьте утечки:</b> Осмотрите радиаторы, трубы и соединения.
                  </p>
                  <p>
                    <b>Проверьте расширительный бак:</b> Если давление резко растёт при
                    нагреве и падает при остывании, возможно, нужно подкачать
                    воздух в расширительный бак (норма — 1,0-1,2 атм).
                  </p>
                  <p>
                    Если проблема повторяется часто, рекомендуется вызвать
                    специалиста, так как возможна неисправность теплообменника или
                    крана подпитки.
                  </p>`,
      },
      {
        question: `Что делать, если на котле не горит дисплей?`,
        answer: `<p>
                  Если дисплей котла не горит, проблема почти вегда связана с
                  отсутствием электропитания или выходом из строя
                  предохранителей на плате управления.
                </p>
                <p><b>Пошаговая инструкция:</b></p>
                <ol>
                  <li>
                    <b>Проверьте питание:</b> Убедитесь, что розетка работает
                    (подключите другой прибор). Проверьте автоматы в щитке.
                  </li>
                  <li>
                    <b>Переверните вилку:</b> Многие котлы — фазозависимые. Если после
                    отключения света вилка была вставлена иначе, котёл не
                    включится.
                  </li>
                  <li>
                    <b>Проверьте предохранители:</b> Откройте крышку котла, найдите
                    электронную плату и проверьте плавкие предохранители. Если
                    они черные или нить внутри оборвана, замените их на
                    аналогичные.
                  </li>
                  <li>
                    <b>Перезагрузите котёл:</b> Нажмите кнопку "Reset" или
                    выключите/включите питание кнопкой на панели.
                  </li>
                  <li>
                    <b>Осмотрите плату:</b> Если предохранители целы, но запаха гари
                    нет, возможно, вышел из строя блок питания платы (нужен
                    специалист).
                  </li>
                </ol>
                <p>
                  Если проблема не решилась заменой предохранителей, вызывайте
                  сервисного инженера — вероятна поломка основной платы.
                </p>`,
      },
      {
        question: `Что делать, если котёл течёт?`,
        answer: `<p>
                  При утечке воды из котла необходимо немедленно обесточить его 
                  и перекрыть подачу газа/воды, чтобы избежать замыкания или взрыва. 
                  После этого следует перекрыть отсекающие краны н входе/выходе из 
                  котла, осмотреть место течи и вызвать сервисного специалиста. 
                  Не пытайтесь включать котёл до устранения неисправности.
                </p>
                <p><b>Пошаговая инструкция:</b></p>
                <ol>
                  <li>
                    <b>Обесточить:</b> Выключите котёл из розетки или отключите автомат в щитке.
                  </li>
                  <li>
                    <b>Перекрыть газ:</b> Закройте газовый вентиль, чтобы избежать утечки газа.
                  </li>
                  <li>
                    <b>Закрыть воду:</b> Перекройте краны подачи холодной воды в котёл и краны 
                    контура отопления.
                  </li>
                  <li>
                    <b>Проветрить:</b> Откройте окна, если чувствуете запах газа.
                  </li>
                  <li>
                    <b>Осмотреть:</b> Визуально определите место течи (часто течёт 
                    предохранительный клапан, насос или места соединений).
                  </li>
                  <li>
                    <b>Вызвать мастера:</b> Свяжитесь с сервисной службой для ремонта. 
                  </li>
                </ol>
                <p><b>Основные причины утечки:</b></p>
                <ul>
                  <li>
                    <b>Срабатывание предохранительного клапана:</b> Происходит из-за 
                    высокого давления (более 2.5-3 бар) или неисправности клапана.
                  </li>
                  <li>
                    <b>Коррозия теплообменников:</b> Особенно актуально для старых или 
                    алюминиевых теплообменников.
                  </li>
                  <li>
                    <b>Износ прокладок и соединений:</b> Постоянное расширение и сжатие от 
                    температурных перепадов ослабляет стыки.
                  </li>
                  <li>
                    <b>Проблемы с расширительным баком:</b> Потеря давлени или разрыв 
                    мембраны бака приводят к скачкам давления и сбросу воды.
                  </li>
                </ul>
                <p><b>Что нельзя делать:</b></p>
                <ul>
                  <li>
                    Включать котёл, если он течёт.
                  </li>
                  <li>
                    Пытаться ремонтировать газовые узлы самостоятельно.
                  </li>
                  <li>
                    Добавлять воду в систему, если давление продолжает падать.
                  </li>
                </ul>`,
      },
      {
        question: `Что делать, если появился шум при работе котла?`,
        answer: `<p>
                  Шум в котле (гул, свист, треск) чаще всего вызван воздухом в системе 
                  (нужно спустить через краны Маевского), накипью в теплообменнике (требуется 
                  промывка), неисправностью циркуляционного насоса или вентилятора. Если 
                  шум сильный, сопровождается вибрацией или запахом газа, немедленно отключите 
                  котёл и вызовите специалиста.
                </p>
                <p><b>Что делать в первую очередь:</b></p>
                <ol>
                  <li>
                    Проверьте давление по манометру.
                  </li>
                  <li>
                    Спустите воздух из радиаторов.
                  </li>
                  <li>
                    Если шум не исчез, вызовите мастера для проверки насоса и 
                    теплообменника.
                  </li>
                </ol>
                <p><b>Основные причины шума и их решения:</b></p>
                <ul>
                  <li>
                    <b>Воздух в системе отопления (гул/бульканье):</b> Самая частая причина, 
                    особенно после подпитки воды.<br><b>Решение:</b> Стравить воздух кранами 
                    Маевского на радиаторах и автоматическим воздухоотводчиком на самом 
                    котле.
                  </li>
                  <li>
                    <b>Накипь/грязь в теплообменнике (треск/кипение):</b> Отложения ухудщают 
                    теплообмен, вода перегревается и закипает.<br><b>Решение:</b> Химическая 
                    промывка теплообменника.
                  </li>
                  <li>
                    <b>Проблемы с циркуляционным насосом (гул/вибрация):</b> Износ подшипников 
                    или попадание воздуха.<br><b>Решение:</b> Проверить насос, при необходимости 
                    смазать или заменить.
                  </li>
                  <li>
                    <b>Неисправность вентилятора (свист/вибрация):</b> Износ подшипников 
                    вентилятора дымоудаления.<br><b>Решение:</b> Очистка или замена вентилятора.
                  </li>
                  <li>
                    <b>Низкое давление воды:</b> Давление упало ниже нормы (обычно < 1 бар).<br>
                    <b>Решение:</b> Подпитать систему водой до рабочего давления (обычно 1.2-1.5 бар).
                  </li>
                </ul>`,
      },
      {
        question: `Что делать, если горит ошибка "Нет розжига"?`,
        answer: `<p>
                  Ошибка "Нет розжига" (часто E01, A01) означает, что котёл не может зажечь пламя 
                  или пламя гаснет сразу после появления. Основные причины: перекрыт газ, низкое 
                  давление, грязь на электроде розжига, отсутствие заземления, сбой платы. 
                  Попробуйте перезагрузить котёл кнопкой "Reset".
                </p>
                <p><b>Основные причины и что проверить:</b></p>
                <ul>
                  <li>
                    <b>Газ и электропитание:</b> Убедитесь, что газовый кран открыт, и есть напряжение в сети.
                  </li>
                  <li>
                    <b>Электрод розжига/ионизации:</b> Самая частая причина. Электрод может загрязниться 
                    (нагар) или сместиться. Требуется очистка от нагара.
                  </li>
                  <li>
                    <b>Давление газа:</b> Низкое или нестабильное давление в магистрали.
                  </li>
                  <li>
                    <b>Датчики безопасности:</b> Сработали датчики тяги или перегрева (могут требовать замены).
                  </li>
                  <li>
                    <b>Паразитный потенциал:</b> Отсутствие заземления или наличие напряжения на газовой трубе.
                  </li>
                  <li>
                    <b>Электронная плата:</b> Неисправность модуля управления.
                  </li>
                </ul>
                <p>Если перезагрузка не помогает, рекомендуется вызвать специалиста, так как проблема 
                может быть связана с газовым клапаном или платой.</p>`,
      },
    ],
    openIcon: {
      src: _assets_image_icons_open_icon_svg__WEBPACK_IMPORTED_MODULE_9__,
    },
  },
  contacts: {
    title: "Контакты",
    cards: {
      para: {
        area: {
          icon: {
            src: _assets_image_icons_contacts_area_svg__WEBPACK_IMPORTED_MODULE_4__,
            alt: "",
          },
          title: "Районы обслуживания",
          value:
            "Работаем в Калининграде и области. Выполняем выезд для диагностики, ремонта и обслуживания отопительного оборудования.",
        },
        hours: {
          icon: {
            src: _assets_image_icons_contacts_hours_svg__WEBPACK_IMPORTED_MODULE_7__,
            alt: "",
          },
          title: "Рабочие часы",
          value: "Пн–Пт: 10:00 — 17:00",
        },
      },
      links: {
        phone: {
          icon: {
            src: _assets_image_icons_contacts_phone_svg__WEBPACK_IMPORTED_MODULE_5__,
            alt: "",
          },
          title: "Номера телефонов для связи",
          anchors: [
            { href: "tel:+79114734089", value: "+79114734089" },
            { href: "tel:+74012901416", value: "+74012901416" },
          ],
        },
        mail: {
          icon: {
            src: _assets_image_icons_contacts_mail_svg__WEBPACK_IMPORTED_MODULE_6__,
            alt: "",
          },
          title: "Электронная почта",
          anchors: [
            { href: "mailto:kotel3975@mail.ru", value: "kotel3975@mail.ru" },
          ],
        },
        social: {
          icon: {
            src: _assets_image_icons_contacts_messenger_svg__WEBPACK_IMPORTED_MODULE_8__,
            alt: "",
          },
          title: "Мессенджеры",
          anchors: [
            { href: "https://wa.me/+79114734089", value: "WhatsApp" },
            { href: "https://t.me/+79114734089", value: "Telegram" },
          ],
        },
      },
    },
  },
};


/***/ },

/***/ "./src/utils/setFavicon.js"
/*!*********************************!*\
  !*** ./src/utils/setFavicon.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFavicon: () => (/* binding */ setFavicon)
/* harmony export */ });
const setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.type = 'image/svg';
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/pages/home/home.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/image/logo.svg */ "./src/assets/image/logo.svg");
/* harmony import */ var _assets_fonts_DelaGothicOne_Regular_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/fonts/DelaGothicOne-Regular.woff2 */ "./src/assets/fonts/DelaGothicOne-Regular.woff2");
/* harmony import */ var _assets_image_icons_telegram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/image/icons/telegram.svg */ "./src/assets/image/icons/telegram.svg");
/* harmony import */ var _assets_image_icons_whatsapp_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/image/icons/whatsapp.svg */ "./src/assets/image/icons/whatsapp.svg");
/* harmony import */ var _utils_setFavicon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/setFavicon */ "./src/utils/setFavicon.js");
/* harmony import */ var _components_burgerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/burgerMenu */ "./src/components/burgerMenu.js");
/* harmony import */ var _handlers_handleAccordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/handlers/handleAccordion */ "./src/handlers/handleAccordion.js");
/* harmony import */ var _render_renderHero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/render/renderHero */ "./src/render/renderHero.js");
/* harmony import */ var _render_renderAboutShort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/render/renderAboutShort */ "./src/render/renderAboutShort.js");
/* harmony import */ var _render_renderServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/render/renderServices */ "./src/render/renderServices.js");
/* harmony import */ var _render_renderMaintenance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/render/renderMaintenance */ "./src/render/renderMaintenance.js");
/* harmony import */ var _render_renderFaq__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/render/renderFaq */ "./src/render/renderFaq.js");
/* harmony import */ var _render_renderContacts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/render/renderContacts */ "./src/render/renderContacts.js");


















(0,_utils_setFavicon__WEBPACK_IMPORTED_MODULE_5__.setFavicon)(_assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
(0,_components_burgerMenu__WEBPACK_IMPORTED_MODULE_6__.burgerMenu)();

(0,_render_renderHero__WEBPACK_IMPORTED_MODULE_8__.renderHero)();
(0,_render_renderAboutShort__WEBPACK_IMPORTED_MODULE_9__.renderAboutShort)();
(0,_render_renderServices__WEBPACK_IMPORTED_MODULE_10__.renderServices)();
(0,_render_renderMaintenance__WEBPACK_IMPORTED_MODULE_11__.renderMaintenance)();
(0,_render_renderFaq__WEBPACK_IMPORTED_MODULE_12__.renderFaq)();
(0,_handlers_handleAccordion__WEBPACK_IMPORTED_MODULE_7__.handleAccordion)();
(0,_render_renderContacts__WEBPACK_IMPORTED_MODULE_13__.renderContacts)();
})();

/******/ })()
;
//# sourceMappingURL=home.js.map