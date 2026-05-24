import { API_URL } from "@/config/api";

export async function getPriceCategory() {
  try {
    const response = await fetch(`${API_URL}/items/price_category`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки price_category');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}