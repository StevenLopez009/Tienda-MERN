import {  createContext, useContext, useState } from "react";
import { getProductsRequest, createProductRequest, getProductRequest } from "./api/product";
import { getFavoritesRequest } from "./api/favorite";
const ProductService = createContext()

export const useProducts =()=>{
  const context = useContext(ProductService)

  if(!context){
    throw new Error("UseProduct must be used within a TaskProvider")
  }
  return context
}

export function ProductProvider ({children}){
  const [products, setProducts]= useState([])

  const getProducts= async ()=>{
    try {
      const res= await getProductsRequest()
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const createProduct = async(product)=>{
    const res = await createProductRequest(product)
  }

  const getProduct= async (id)=>{
    const res = await getProductRequest(id)
    return res.data
  }

  const getFavorites = async (id) => {
    try {
      const res = await getFavoritesRequest(id);  
      return res.data;  
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  
  return(
    <ProductService.Provider value={{products, getProducts, createProduct, getProduct, getFavorites}}>
      {children}
    </ProductService.Provider>
  )
}