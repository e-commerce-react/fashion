const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
const CREATE_ORDER = 'CREATE_ORDER';
const post_ORDER = 'POST_ORDER';

export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

export const createOrder = order => ({
  type: CREATE_ORDER,
  order
})

export const postOrder = order => ({
  type: POST_ORDER,
  order
})

export const fetchOrderFromServer = orderId => dispatch =>
  fetch(`api/orders/${orderId}`)
    .then(res => res.json())
    .then(orders => dispatch(receiveOrders(orders)))
    .catch(err => console.error(err.stack));


export default function order (state=[], action) {
  switch (action.type) {
    case RECEIVE_ORDERS: return action.orders;
    default: return state;
  }
}
