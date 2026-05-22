import { getFaqList } from "@/api/getFaqList";
import { getPricespage } from '@/api/getPricespage';
import { API_URL } from "@/config/api";

function createFaqItem(item, openIcon) {
  return `<div class="faq__block accordion">
            <div class="faq__text">
              <h3 class="faq__question">${item.question}</h3>
              <div class="faq__answer accordion-item">${item.answer}</div>
            </div>
            <img 
              class="faq__open"
              src="${API_URL}/assets/${openIcon}"
              alt
            />
          </div>`;
}

export async function renderPrices() {
  const prices = await getPricespage();
  const faqList = await getFaqList();

  document.querySelector('.faq__title').textContent = faq.title;

  const faqBox = document.querySelector('.faq__content');

  const openIcon = faq.faq_open_icon;

  faqList.forEach(item => {
    faqBox.insertAdjacentHTML('beforeend', createFaqItem(item, openIcon));
  });
};