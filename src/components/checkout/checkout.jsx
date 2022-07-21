import './checkout.styles.scss';

import { useContext, useEffect, useState } from 'react';

import { CartItemContext } from '../../context/cart-content.context';
import CheckoutItem from '../checkout-item/checkout-item';

const Checkout = () => {
  const [total, setTotal] = useState(0)
  const {cartItems} = useContext(CartItemContext);

  useEffect(()=> {
    let value = 0;
    cartItems.map((item) => {
      value += item.quantity * item.price
    })
    setTotal(value)
  }, [cartItems])
  
  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      {cartItems.map((item)=> (
        <CheckoutItem key={item.id} item={item} />
        
      ))}
      <div className='total-price'>
        {total > 0 ? `TOTAL: $ ${total}` : null}
      </div>
    </div>
  )
}

export default Checkout;
