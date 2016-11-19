import { combineReducers } from 'redux';
import auth from './auth';
import products from './products';
import product from './productDetail';


export default combineReducers({
  auth,
  products,
  product
})