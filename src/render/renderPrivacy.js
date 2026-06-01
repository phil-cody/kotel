import { getPrivacyPage } from '@/api/getPrivacyPage';

export async function renderPrivacy() {
  const privacyPage = await getPrivacyPage();

  const privacyTitle = document.querySelector(".privacy__title");

  privacyTitle.textContent = privacyPage.privacy_title;
  privacyTitle.insertAdjacentHTML('afterend', privacyPage.privacy_text);
};
