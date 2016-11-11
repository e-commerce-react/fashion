const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export default function products (state=[], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS: return action.products;
    default: return state;
  }
}