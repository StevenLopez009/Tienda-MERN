import axios from "./axios.js";

export const getFavoritesRequest = (id) => axios.get(`/favorites/${id}`);
