import { connect } from 'react-redux';
import ProductsList from './ProductsGridList';
import { receiveProductsFromServer, fetchProductsFromServer } from '../../redux/products';

const mapStateToProps = state => ({products: state.products});

const mapDispatchToProps = dispatch => ({
  recieveProducts: products => dispatch(receiveProductsFromServer(products)),
  fetchProducts: () => dispatch(fetchProductsFromServer())
})

const ProductsContainer = connect( mapStateToProps, mapDispatchToProps ) (ProductsList);
export default ProductsContainer;