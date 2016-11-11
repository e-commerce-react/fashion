import { combineReducers } from 'redux';
import products from './products';
import product from './selectedProduct';


const rootReducer = combineReducers({
  products,
  product
});

export default rootReducer;