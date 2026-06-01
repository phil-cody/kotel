import { API_URL } from "@/config/api";

export async function getContactsPage() {
  try {
    const response = await fetch(`${API_URL}/items/ContactsPage`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки contacts page');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}