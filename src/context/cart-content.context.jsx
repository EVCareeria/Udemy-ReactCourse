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

const removeCartItem  = (cartItems, id, all = false) => {

  for(let i =0;i<cartItems.length;i++) {
    if(cartItems[i].id === id)  {
      if(all) {
        return cartItems.filter(item => item !== cartItems[i])
      }
      if(cartItems[i].quantity === 1) {
        return cartItems.filter(item => item !== cartItems[i])
      } else {
        cartItems[i].quantity -= 1
        return [...cartItems]
      }
    }
  }
}

export const CartItemContext = createContext({
  setShowDropdown: () => null,
  showDropdown: false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteAllItemsFromCart: () => {},
  totalCost: 0,
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
  const removeItemFromCart = (id) => {
    setCartItems(removeCartItem(cartItems, id))
  }
  const deleteAllItemsFromCart = (id) => {
    setCartItems(removeCartItem(cartItems, id, true))
  }
  
  const value = {deleteAllItemsFromCart, cartItems, cartCount, removeItemFromCart, addItemToCart, showDropdown, setShowDropdown };
  
  return <CartItemContext.Provider value={value}>{children}</CartItemContext.Provider>;
};
