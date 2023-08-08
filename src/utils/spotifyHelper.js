import axios from "axios";

export const setAuthHeader = () => {
  try {
    const token = localStorage.getItem("spotify_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  } catch (error) {
    console.log("Error setting auth", error);
  }
};

export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split('&').reduce((initial, item) =>  {
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
}