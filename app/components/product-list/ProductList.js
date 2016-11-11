import React from 'react';
import { Link } from 'react-router';
import ProductListContainer from './ProductListContainer';

export default ({ products }) => (
  <div>
     <div>
      {
        products.map(product => (
          <div key={ product.id }>
            <Link to={`/products/${product.id}`}>
              { product.name }
            </Link>
          </div>
        ))
      }
    </div>
  </div>
)