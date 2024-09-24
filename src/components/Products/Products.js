import React from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  return (
    <section>
      {productsData.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;