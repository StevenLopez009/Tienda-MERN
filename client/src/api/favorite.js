import axios from "./axios";

export const getFavoriteRequest = () => axios.get("/products");
