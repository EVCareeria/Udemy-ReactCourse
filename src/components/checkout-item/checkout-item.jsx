import { useContext } from "react"
import { CartItemContext } from "../../context/cart-content.context"

import './checkout-item.styles.scss'

const CheckoutItem = ({item}) => {
  const {removeItemFromCart, deleteAllItemsFromCart, addItemToCart} = useContext(CartItemContext);
  const removeItem = () => removeItemFromCart(item.id)
  const addItem = () => addItemToCart(item)
  const deleteAllItems = () => deleteAllItemsFromCart(item.id)
  
  return(
      <div className="item-container">
          <img src={item.imageUrl} alt='' />
          <p>{item.name}</p>
          <p><span className='span-button' onClick={removeItem}>{`<`}</span>
           {item.quantity} 
           <span className='span-button' onClick={addItem} >{`>`}</span></p>
          <p>{item.price * item.quantity}</p>
          <p onClick={deleteAllItems}>X</p>
        </div>
  )
}

export default CheckoutItem
