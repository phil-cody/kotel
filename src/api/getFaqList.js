import { API_URL } from "@/config/api";

export async function getFaqList() {
  try {
    const response = await fetch(`${API_URL}/items/question_answer`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки question_answer');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}