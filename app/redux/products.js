const RECEIVE_PRODUCTS_FROM_SERVER = 'RECEIVE_PRODUCTS_FROM_SERVER';
import store from '../store';

export const receiveProductsFromServer = products => ({
  type: RECEIVE_PRODUCTS_FROM_SERVER,
  products
})

export const fetchProductsFromServer = () => {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => store.dispatch(receiveProductsFromServer(products)))
      .catch(err => console.error(err.stack))
}

export default function products (state=[], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS_FROM_SERVER: return action.products;
    default: return state;
  }
}