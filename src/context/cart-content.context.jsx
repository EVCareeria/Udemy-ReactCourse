import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const exists = cartItems.find((item) => 
    item.id === productToAdd.id)

    if(exists) {
      return cartItems.map((item) => item.id === productToAdd.id ?
      {...item, quantity: item.quantity +1}
      : item) 
    }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartItemContext = createContext({
  setShowDropdown: () => null,
  showDropdown: false,
  cartItems: [],
  addItemToCart: () => {},
  cartCount:0
});

export const CartItemProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(()=> {
    const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))
  }
  
  const value = { cartItems, cartCount, addItemToCart, showDropdown, setShowDropdown };
  
  return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>;
};
