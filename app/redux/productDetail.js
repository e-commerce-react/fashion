const RECEIVE_PRODUCT_DETAIL = 'RECEIVE_PRODUCT_DETAIL';

export const receiveProductDetail = product => ({
  type: RECEIVE_PRODUCT_DETAIL,
  product
});

export const fetchAndGoToProductDetail = productId => dispatch =>
  fetch(`/api/products/${productId}`)
    .then(res => res.json())
    .then(product => dispatch(receiveProductDetail(product)))
    .catch(err => console.error(err.stack));


export default function product (state={}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT_DETAIL: return action.product;
    default: return state;
  }
}