import axios from "axios";

export const setTokenToAxios = (token) => {
  token ? (axios.defaults.headers.common["auth"] = token) : delete axios.defaults.headers.common["auth"];
};
