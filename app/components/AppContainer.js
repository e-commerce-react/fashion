import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state, { location }) => ({
  location
});

export default connect(
  mapStateToProps
)(App);