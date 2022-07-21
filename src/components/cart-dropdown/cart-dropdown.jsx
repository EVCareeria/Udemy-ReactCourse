import { useContext } from 'react'

import { CartItemContext } from '../../context/cart-content.context'

import Button from '../button/button'

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item'

const CartDropdown = () => {
  const {cartItems} = useContext(CartItemContext)
  
  
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item)=> (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;
