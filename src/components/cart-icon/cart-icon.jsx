import { useContext } from 'react'

import { CartItemContext } from '../../context/cart-content.context'
import{ShoppingIcon, ItemCount, CartIconContainer} from './cart-icon.styles.js'

const CartIcon = () => {
  const { showDropdown, setShowDropdown, cartCount} = useContext(CartItemContext);

  const toggleIsCartOpen = () => setShowDropdown(!showDropdown)

  return(
    <CartIconContainer  onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
