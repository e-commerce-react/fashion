import { connect } from 'react-redux';
import ProductDetailComponent from './ProductDetailComponent';

// import { receiveProductDetail } from '../../redux/selectedProduct';

const mapStateToProps = state => ({product: state.product});

// const mapDispatchToProps = dispatch => ({
//   recieveProductDetail: product => dispatch(receiveProductDetail(product)),
//   fetchProductDetail: () => dispatch(fetchProductFromServer())
// })

const ProductDetailContainer = connect( mapStateToProps ) (ProductDetailComponent);
export default ProductDetailContainer;