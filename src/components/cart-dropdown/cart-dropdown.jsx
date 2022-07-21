import { useContext } from 'react'
import {Link} from 'react-router-dom'

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
      <Link className="nav-link" to='/checkout'>
        <Button >GO TO CHECKOUT</Button>
      </Link>
    </div>
  )
}

export default CartDropdown;
