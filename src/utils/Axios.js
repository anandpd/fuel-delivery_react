import axios from "axios";
import { URL, METHOD } from "./constant";
axios.defaults.baseURL = URL.BASE_URL;

export const callAxios = async (_url, _method = METHOD.GET, _data = null, _headers = null) => {
  try {
    const { data } = await axios({
      method: _method,
      url: _url,
      data: _data,
      headers: _headers,
    });
    console.log("AXIOS DATA ========>", data);
    return data;
  } catch (error) {
    console.log("AXIOS ERROR =======>", error.message, error.result);
    return error;
  }
};
