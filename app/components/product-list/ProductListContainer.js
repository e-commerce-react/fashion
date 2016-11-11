import { connect } from 'react-redux';
import ProductList from './ProductList';
import { receiveProducts } from '../../redux/products';

const mapStateToProps = state => ({products: state.products});

export default connect( mapStateToProps ) (ProductList);