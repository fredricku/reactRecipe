import React, { Component } from 'react';
// import './Maincourse.css'
// import './NavBar.js'

import {connect} from 'react-redux'
//import LoginForm from '../Forms/LoginForm';
import PropTypes from 'prop-types';




import MyForm from '../Forms/MyForm';


class LoginPage extends Component {


handleSubmit= data => this.props.login(data).then(()=>this.props.history.push('/'));



  render() {
    return (
      <div >
        <h1>Login Page</h1>


        <MyForm submit ={this.submit}/>

      </div>
    )
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null)(LoginPage);
