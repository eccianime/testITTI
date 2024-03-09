import axios from 'axios';

export const BASE_URL = 'http://www.omdbapi.com/?apikey=584e4586';

export default async function axiosRequest(url: string) {
  try {
    const response = await axios.request({
      method: 'GET',
      url: BASE_URL + url,
      timeout: 15000,
    });
    return response.data;
  } catch (error: any) {
    console.log(error?.response?.data);
    return null;
  }
}
