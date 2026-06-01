import { API_URL } from "@/config/api";

export async function getPrivacyPage() {
  try {
    const response = await fetch(`${API_URL}/items/PrivacyPage`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки privacy page');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}