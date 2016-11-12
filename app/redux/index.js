import { combineReducers } from 'redux';
import products from './products';
import product from './productDetail';

export default combineReducers({
  products,
  product
})