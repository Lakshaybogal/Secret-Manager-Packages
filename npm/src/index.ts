import axios from 'axios';

export async function getSecret(key: string, accessPassword: string) {
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/env/get/?key=${key}&access_password=${accessPassword}`);
    return response.data.data.value;
  } catch (error) {
    console.error('Error fetching age:', error);
    return null;
  }
}