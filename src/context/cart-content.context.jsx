import { createContext, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const CartItemContext = createContext({
  setShowDropdown: () => null,
  showDropdown: false,
  cartItems: [],
  setCartItems: () => null
});

export const CartItemProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const value = { cartItems, setCartItems, showDropdown, setShowDropdown };
  
  return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>;
};
