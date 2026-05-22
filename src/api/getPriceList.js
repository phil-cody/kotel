import { API_URL } from "@/config/api";

export async function getPriceList() {
  try {
    const response = await fetch(`${API_URL}/items/price_list`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки price_list');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}