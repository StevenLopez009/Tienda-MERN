import {  createContext, useContext, useState } from "react";
import { getProductsRequest, createProductRequest, getProductRequest } from "../api/product";

const ProductContext = createContext()

export const useProducts =()=>{
  const context = useContext(ProductContext)

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
      console.log(res.data)
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

  return(
    <ProductContext.Provider value={{products, getProducts, createProduct, getProduct}}>
      {children}
    </ProductContext.Provider>
  )
}