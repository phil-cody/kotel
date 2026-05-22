import { API_URL } from "@/config/api";

export async function getBrandsList() {
  try {
    const response = await fetch(`${API_URL}/items/maintenance_brands`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки maintenance_brands');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}