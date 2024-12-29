import { createContext, useContext, useState } from 'react';

const CartService = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems]= useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const addToFav = (product) => {
    if (favItems.some((item) => item._id === product._id)) {
      setFavItems(favItems.filter((item) => item._id !== product._id));
    } else {
      setFavItems([...favItems, product]);
    }
  };
  

const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const value = {
    cartItems,
    favItems,
    setFavItems,
    addToFav,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartService.Provider value={value}>{children}</CartService.Provider>;
};

export const useCart = () => useContext(CartService);