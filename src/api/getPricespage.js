import { API_URL } from "@/config/api";

export async function getPricepage() {
  try {
    const response = await fetch(`${API_URL}/items/PricesPage`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки price page');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}