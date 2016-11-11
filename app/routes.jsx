import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Home from './components/Home/Home';
import ProductsContainer from './components/Products/ProductsContainer';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/products" component={ProductsContainer} />
  </Router>
);