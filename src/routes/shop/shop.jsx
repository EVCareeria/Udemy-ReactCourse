import {Routes, Route} from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';

import {ProductsContainer} from './shop.styles.js';

const Shop = () => {
 
  return(
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop;
