import { createContext, useContext, useState } from "react";
import { getProductsRequest, createProductRequest, getProductRequest } from "./api/product";
import { getFavoritesRequest, createFavoriteRequest, deleteFavoriteRequest } from "./api/favorite";
const ProductService = createContext()

export const useProducts = () => {
  const context = useContext(ProductService)

  if (!context) {
    throw new Error("UseProduct must be used within a TaskProvider")
  }
  return context
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await getProductsRequest()
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const createProduct = async (product) => {
    const res = await createProductRequest(product)
  }

  const getProduct = async (id) => {
    const res = await getProductRequest(id)
    return res.data
  }

  const getFavorites = async (id) => {
    try {
      const res = await getFavoritesRequest(id);
      console.log(res.data)
      return res.data;
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const createFavorite = async (id, idProductArray) => {
    try {
      const res = await createFavoriteRequest(id, idProductArray);
      return res.data;
    } catch (error) {
      console.error("Error creating favorite:", error);
    }
  };

  const deleteFavorite = async (id, idProduct) => {
    try {
      const res = await deleteFavoriteRequest(id, idProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === idProduct ? { ...product, isFavorited: false } : product
        )
      );
      return res.data;
    } catch (error) {
      console.error("Error Deleting favorite:", error.response?.data || error.message);
    }
  };


  return (
    <ProductService.Provider value={{ products, getProducts, createProduct, getProduct, getFavorites, createFavorite, deleteFavorite }}>
      {children}
    </ProductService.Provider>
  )
}