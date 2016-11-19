import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';

// const mapStateToProps = state => ({product: state.product});
const mapStateToProps = ({product}) => ({product: product})

export default connect( mapStateToProps ) (ProductDetail);