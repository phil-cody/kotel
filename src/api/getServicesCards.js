import { API_URL } from "@/config/api";

export async function getServicesCards() {
  try {
    const response = await fetch(`${API_URL}/items/services_cards`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки services_cards');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}