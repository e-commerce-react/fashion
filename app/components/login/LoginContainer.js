import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import {login} from '../../redux/auth'


const mapStateToProps = state => ({});
const mapDispatchToProps = {login};


export default connect (mapStateToProps, mapDispatchToProps) (LoginForm)






// function FormDecorator (InnerComponent) {

//   return class StatefulForm extends React.Component {

//     constructor (props) {
//       super(props);
//       this.state = {
//         email: '',
//         password: ''
//       }
//       this.handleSubmitWithStatefulReactComponent = this.handleSubmitWithStatefulReactComponent.bind(this)
//     }

//     handleSubmitWithStatefulReactComponent (evt) {
//       evt.preventDefault();
//       const user = {email: this.state.email, password: this.state.password};
//       this.props.handleSubmit(user)
//     }

//     render () {
//       return (
//         <InnerComponent
//           handleSubmit={this.handleSubmitWithStatefulReactComponent}
//         />
//       )
//     }
//   }
// }


// const mapDispatchToProps = function (dispatch) {
//   return {
//     handleSubmit: function (user) {
//       console.log(user);

//       // const newStory = {
//       //   id: formInput,
//       //   title: formInput
//       // }

//       // const action = addStory(newStory);
//       // dispatch(action);
//     }
//   }
// }


// const statefulReduxComponentCreator = connect(null, mapDispatchToProps);
// const StatefulForm = FormDecorator(LoginForm);
// const LoginContainer = statefulReduxComponentCreator(StatefulForm);

// export default LoginContainer;