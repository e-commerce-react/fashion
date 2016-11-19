import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { onProductListEnter, onProductDetailEnter } from './enter-hooks';

import App from './components/App';
import LandingContainer from './components/landing/LandingContainer';
import ProductListContainer from './components/product-list/ProductListContainer';
import ProductDetailContainer from './components/product-detail/ProductDetailContainer';
import LoginContainer from './components/login/LoginContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRedirect to="landing" />
      <Route path="landing" component={LandingContainer} />
      <Route path="products" component={ProductListContainer} onEnter={onProductListEnter} />
      <Route path="products/:productId" component={ProductDetailContainer} onEnter={onProductDetailEnter} />
      <Route path="login" component={LoginContainer} />
    </Route>

  </Router>
)