import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

// HTTP-запит при оновлені компоненту при зміні стану після сабміту форми

export const requestImages = async (query: string, page: number = 1) => {
  const response: AxiosResponse = await axios.get(
    `/search/photos/?client_id=s6sOTg-4HffngxAlfYllI_pIwY2-Him-pHFKzypl6TA&query=${query}&page=${page}&per_page=16`
  );
  return response.data;
};
