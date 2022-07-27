import { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card';

import { CategoriesContext } from '../../context/categories.context';

import {CategoryTitle, CategoryContainer} from './category.styles.js';

const Category = () => {
  const {category} = useParams()
  const {categoriesMap} = useContext(CategoriesContext)
  const [products, setProducts] = useState([])

  useEffect(()=> {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return(
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products?.map((product) => <ProductCard key={product.id} product={product}  />)}
      </CategoryContainer>
    </>
  )
}

export default Category
