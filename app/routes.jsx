import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Home from './components/Home/Home';
import ProductsContainer from './components/Products/ProductsContainer';
import ProductDetailContainer from './components/ProductDetail/ProductDetailContainer';
import { fetchProductsFromServer } from './redux/products';
import store from './store';

import { fetchAndGoToProductDetail } from './redux/selectedProduct';

const onProductDetailEnter = ({params}) => {
  store.dispatch(fetchAndGoToProductDetail(params.productId))
};

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route
      path="/products"
      component={ProductsContainer}
      onEnter={fetchProductsFromServer}
    />
    <Route
      path="/products/:productId"
      component={ProductDetailContainer}
      onEnter={onProductDetailEnter}

    />
  </Router>
);


// <Route path="albums/:id" component={AlbumContainer} onEnter={onAlbumsEnter} />