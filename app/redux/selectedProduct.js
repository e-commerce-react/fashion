const RECEIVE_PRODUCT_DETAIL = 'RECEIVE_PRODUCT_DETAIL';

export const receiveProductDetail = product => ({
  type: RECEIVE_PRODUCT_DETAIL,
  product
});

// import store from '../store';

export const fetchAndGoToProductDetail = productId => dispatch =>
  fetch(`/api/products/${productId}`)
    .then(res => res.json())
    .then(product => dispatch(receiveProductDetail(product)));

// export const fetchAndGoToProductDetail = productId => {
//   fetch(`/api/products/${productId}`)
//     .then(res => res.json())
//     .then(product => { store.dispatch(receiveProductDetail(product))});

//     }




export default function selectedProduct (state={}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT_DETAIL: return action.product;
    default: return state;
  }
}