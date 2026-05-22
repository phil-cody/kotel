import { API_URL } from "@/config/api";

export async function getPriceInfo() {
  try {
    const response = await fetch(`${API_URL}/items/price_info`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки price_info');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}