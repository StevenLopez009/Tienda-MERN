import axios from "./axios";

export const getFavoriteRequest = (user) => axios.get("/products");
