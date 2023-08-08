import axios from "axios";
import { setAuthHeader } from "./spotifyHelper";

export const getRequest = async (url, params) => {
  setAuthHeader();
  return axios.get(`https://api.spotify.com/v1/${url}`, params);
};