import {ProductCardContainer} from './product-card.styles.js';

import { useContext } from 'react';
import { CartItemContext } from '../../context/cart-content.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartItemContext)

  const addProductToCart = () => addItemToCart(product)
  
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={'${name}'} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard
