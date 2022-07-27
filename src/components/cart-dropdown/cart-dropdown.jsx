import { useContext } from 'react'
import {Link} from 'react-router-dom'

import { CartItemContext } from '../../context/cart-content.context'

import Button from '../button/button'

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.js'

import CartItem from '../cart-item/cart-item'

const CartDropdown = () => {
  const {cartItems} = useContext(CartItemContext)
  
  return(
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
        cartItems.map((item)=> (
          <CartItem key={item.id} cartItem={item} />
          ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
      }
        
      </CartItems>
      <Link className="nav-link" to='/checkout'>
        <Button >GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  )
}

export default CartDropdown;
