import { API_URL } from "@/config/api";

export async function getBrandsPage() {
  try {
    const response = await fetch(`${API_URL}/items/BrandsPage`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки brands page');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}