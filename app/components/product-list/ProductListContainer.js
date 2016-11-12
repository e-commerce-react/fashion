import { connect } from 'react-redux';
import ProductList from './ProductList';

const mapStateToProps = state => ({products: state.products});

export default connect( mapStateToProps ) (ProductList);