import { API_URL } from "@/config/api";

export async function getCertificateList() {
  try {
    const response = await fetch(`${API_URL}/items/CertificatesList`);

    if (!response.ok) {
      throw new Error('Ошибка загрузки certificate list');
    }

    const result = await response.json();
    
    return result.data;
  } catch (error) {
    console.error(error);
  }
}