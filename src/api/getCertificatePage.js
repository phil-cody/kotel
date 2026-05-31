import { API_URL } from "@/config/api";

export async function getCertificatePage() {
  try {
    const response = await fetch(`${API_URL}/items/CertificatesPage`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки certificate page');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}