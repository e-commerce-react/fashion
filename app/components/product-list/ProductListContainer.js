import { connect } from 'react-redux';
import ProductList from './ProductList';

const mapStateToProps = state => ({products: state.products});

export default connect( mapStateToProps ) (ProductList);


// const ExampleApp = connect( ({ auth }) => ({ user: auth }) )


// (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )