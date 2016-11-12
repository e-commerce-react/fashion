import store from './store';
import { receiveProducts } from './redux/products';
import { fetchAndGoToProductDetail } from './redux/productDetail';

export const onProductListEnter = () => {
  return fetch('/api/products').then(res => res.json())
    .then((products) => store.dispatch(receiveProducts(products)))
    .catch(err => console.error(err.stack))
}

export const onProductDetailEnter = ({ params }) => store.dispatch(fetchAndGoToProductDetail(params.productId));