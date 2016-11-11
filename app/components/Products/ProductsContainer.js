
import { connect } from'react-redux';
import ProductsList from'./ProductsGridList';

const mapStateToProps = ({ albums }) => ({
  albums
});

export default connect(
  mapStateToProps
)(ProductsList);