import { useContext } from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { CartItemContext } from '../../context/cart-content.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const { showDropdown, setShowDropdown} = useContext(CartItemContext);

  const toggleIsCartOpen = () => setShowDropdown(!showDropdown)

  return(
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcon