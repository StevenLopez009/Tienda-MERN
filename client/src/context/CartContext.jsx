import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

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
    addToFav,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);