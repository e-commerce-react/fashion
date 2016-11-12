import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { onProductListEnter, onProductDetailEnter } from './enter-hooks';

import App from './components/App';
import ProductListContainer from './components/product-list/ProductListContainer';
import ProductDetailContainer from './components/product-detail/ProductDetailContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="products" component={ProductListContainer} onEnter={onProductListEnter} />
      <Route path="products/:productId" component={ProductDetailContainer} onEnter={onProductDetailEnter} />
    </Route>

  </Router>
)