import { getPricePage } from "@/api/getPricePage";
import { getPriceList } from "@/api/getPriceList";
import { getPriceInfo } from "@/api/getPriceInfo";
import { getPriceCategory } from "@/api/getPriceCategory";

function createTab(tab) {
  return `<button class="prices__tab tab" data-category="${tab.slug}">${tab.name}</button>`;
}

function createRow(item, category) {
  if (item.text) {
    return `<div class="prices__row" data-category="${category}">
                  <div class="prices__row-service">
                    <p class="prices__row-title">${item.name}</p>
                    <p class="prices__row-text">${item.text}</p>
                  </div>
                  <p class="prices__row-price">${item.price}</p>
                </div>`;
  } else {
    return `<div class="prices__row" data-category="${category}">
                  <div class="prices__row-service">
                    <p class="prices__row-title">${item.name}</p>
                  </div>
                  <p class="prices__row-price">${item.price}</p>
                </div>`;
  }
}

function createInfoItem(item, icon) {
  return `<div class="prices__info-item">
<img src="${icon}"  class="prices__info-icon"/>
<p class="prices__info-text">${item.text}</p>
</div>`;
}

function createCertificateItem(item, icon) {
  return `<img src="${icon}"  class="prices__info-icon"/>
<p class="prices__info-text">${item.text}</p>`;
}

export async function renderPrices() {
  const prices = await getPricePage();
  const priceList = await getPriceList();
  const priceInfo = await getPriceInfo();
  const priceCategory = await getPriceCategory();

  const tabsBox = document.querySelector(".prices__tabs");
  const table = document.querySelector(".prices__table");
  const tableBody = table.querySelector(".prices__table-body");
  const infoBox = document.querySelector(".prices__info");
  const certificateBox = document.querySelector(".prices__certificate");

  const infoItemIcon = prices.prices_info_item_icon;
  const infoCertificateIcon = prices.prices_certificate_icon;

  let currentCategory = priceCategory[0].slug;

  function filterRows() {
    return priceList.filter(
      (item) => priceCategory[item.category - 1].slug === currentCategory,
    );
  }

  priceCategory.forEach((tab) => {
    tabsBox.insertAdjacentHTML("beforeend", createTab(tab));
  });

  table.querySelector(".column-title__service").textContent =
    prices.prices_row_service;
  table.querySelector(".column-title__price").textContent =
    prices.prices_row_price;

  filterRows().forEach((item) => {
    tableBody.insertAdjacentHTML("beforeend", createRow(item, currentCategory));
  });

  const tabs = document.querySelectorAll(".tab");

  tabs[0].classList.add('active');

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(item => item.classList.remove('active'));
      tableBody.innerHTML = "";
      currentCategory = e.target.dataset.category;
      filterRows().forEach((item) => {
        tableBody.insertAdjacentHTML(
          "beforeend",
          createRow(item, currentCategory),
        );
      });
      tab.classList.add('active');
    });
  });

  infoBox.querySelector(".prices__info-title").textContent =
    prices.prices_info_title;
  infoBox.querySelector('.prices__info-header').insertAdjacentHTML(
    "afterbegin",
    `<img src="${prices.prices_info_icon}"/>`,
  );

  priceInfo.forEach((item) => {
    infoBox
      .querySelector(".prices__info-content")
      .insertAdjacentHTML("beforeend", createInfoItem(item, infoItemIcon));
  });

  certificateBox
    .querySelector(".certificate__icon-box")
    .insertAdjacentHTML(
      "beforeend",
      `<img src="${infoCertificateIcon}"  class="certificate-icon"/>`,
    );

  certificateBox.querySelector(".certificate__text-box").insertAdjacentHTML(
    "beforeend",
    `<h3 class="certificate-title">${prices.prices_certificate_title}</h3>`,
  );

  certificateBox.querySelector(".certificate__text-box").insertAdjacentHTML('beforeend', prices.prices_certificate_text);
}
