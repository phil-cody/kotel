import { home } from '@/test-data/homePage';
import openAccordion from "@/assets/image/icons/open-icon.svg";

function createFaqItem(item) {
  return `<div class="faq__block accordion">
            <div class="faq__text">
              <h3 class="faq__question">${item.question}</h3>
              <div class="faq__answer accordion-item">${item.answer}</div>
            </div>
            <img 
              class="faq__open"
              src="${home.faq.openIcon.src}"
              alt
            />
          </div>`;
}

export const renderFaq = () => {
  document.querySelector('.faq__title').textContent = home.faq.title;

  const faqBox = document.querySelector('.faq__content');

  home.faq.questions.forEach(item => {
    faqBox.insertAdjacentHTML('beforeend', createFaqItem(item));
  });
};