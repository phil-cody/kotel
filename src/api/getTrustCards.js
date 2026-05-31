import { API_URL} from '@/config/api';

export async function getTrustCards() {
  try {
    const response = await fetch(`${API_URL}/items/trust_cards`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки trust cards');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}