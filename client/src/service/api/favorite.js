import axios from "./axios.js";

export const getFavoritesRequest = (id) => axios.get(`/favorites/${id}`);

export const createFavoriteRequest = (id, idProductArray) =>
  axios.post("/favorites", {
    userId: id,
    productIds: idProductArray,
  });

  export const deleteFavoriteRequest = (id, idProduct) => {
    return axios.delete("/favorites", {
      data: {
        userId: id,
        productIds: idProduct, 
      },
    });
  };
  
  
