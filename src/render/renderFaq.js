import { getFaqList } from "@/api/getFaqList";
import { getHomepage } from '@/api/getHomepage';

function createFaqItem(item, openIcon) {
  return `<div class="faq__block accordion">
            <div class="faq__text">
              <h3 class="faq__question">${item.question}</h3>
              <div class="faq__answer accordion-item">${item.answer}</div>
            </div>
            <img 
              class="faq__open"
              src="${openIcon}"
              alt
            />
          </div>`;
}

export async function renderFaq() {
  const faq = await getHomepage();
  const faqList = await getFaqList();

  document.querySelector('.faq__title').textContent = faq.faq_title;

  const faqBox = document.querySelector('.faq__content');

  const openIcon = faq.faq_open_icon;

  faqList.forEach(item => {
    faqBox.insertAdjacentHTML('beforeend', createFaqItem(item, openIcon));
  });
};
