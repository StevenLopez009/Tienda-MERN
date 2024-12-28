import axios from "./axios";

export const getFavoritesRequest = (id) => axios.get(`/favorites/${id}`);
