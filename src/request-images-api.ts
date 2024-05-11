import axios, { AxiosResponse } from "axios";
import { RequestImageData, ResponseImageData } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com";
const KEY: string = "s6sOTg-4HffngxAlfYllI_pIwY2-Him-pHFKzypl6TA";

const searchParms: RequestImageData = {
  client_id: KEY,
  query: "",
  page: 1,
  per_page: 20,
};

// HTTP-запит при оновлені компоненту при зміні стану після сабміту форми

// export const requestImages = async (query: string, page: number = 1) => {
//   const response: AxiosResponse<ResponseImageData> = await axios.get(
//     `/search/photos/?client_id=s6sOTg-4HffngxAlfYllI_pIwY2-Him-pHFKzypl6TA&query=${query}&page=${page}&per_page=16`
//   );
//   return response.data;
// };

export const requestImages = async (query: string, page: number) => {
  const response: AxiosResponse<ResponseImageData> = await axios.get(
    "/search/photos",
    {
      params: {
        ...searchParms,
        page,
        query,
      },
    }
  );
  return response.data;
};
