import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { onProductListEnter } from './enter-hooks';

import ProductListContainer from './components/product-list/ProductListContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/products" component={ProductListContainer} onEnter={onProductListEnter} />
  </Router>
)