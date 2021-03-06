
import React, { Component } from 'react';
//import './Maincourse.css'
import {Link} from 'react-router-dom'



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {
        email: "",
        password: ""
    }

}
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  fetchData = () =>{
    fetch('http://localhost:8000/all')
    .then(response => response.json())
     .then( data => {
         console.log(data);
         this.setState({
             data: data
           });
       })

       .catch(error => console.log(error));
     }

     componentDidMount() {
        this.fetchData();

      }
  render() {
    // const { data} = this.state;


    return (
      <div>
      <header className="gNav">
        <ul className="headerButtons">
          <li><Link to = '/HomePage'>Home</Link></li>
          <li><Link to = '/About'>About</Link></li>
          <li><Link to = '/Recipe'>Recipe</Link></li>
          <li><Link to = '/MyForm'>Login</Link></li>
        </ul>
      </header>
      <h1 className ="register"> Create your user account with us</h1>
    <form className="register" action="/insert" method="post">
      <p>
        <label htmlfor="firstname">First name:</label>
        <input type="text" id="firstname" name="firstname" size="35"
         />
      </p>
      <p>
        <label htmlfor="lastname">Last name:</label>
        <input type="text" id="lastname" name="lastname" size="30"
         / >
      </p>
      <p>
        <label htmlfor="address">Address:</label>
        <input type="text" id="address" name="address" size="30"
          />
      </p>
      <p>
        <label htmlfor="emailaddress">emailaddress:</label>
        <input type="email" id="emailaddress" name="emailaddress" size="30"
          />
      </p>
      <p>
        <label htmlfor="password">password:</label>
        <input type="password" id="password" name="password" size="30"
         />
      </p>
      <button type="submit">Submit</button>
    </form>
    <footer className =  "footer">

    <div className="fLeft">
      <ul>
        <li><a href="https://www.facebook.com/login.php?login_attempt=1&lwv=110">Facebook</a></li>
        <li><a href="https://www.instagram.com/accounts/emailsignup/?hl=en">Instagram</a></li>
        <li><a href="https://twitter.com/login?lang=en">Twitter</a></li>
      </ul>
    </div>

    <div className="fRight">
    <ul>
      <li><a href="contact-us.html">Contact us</a></li>
      <li><a href="2.html">About us</a></li>
      <li><Link to = '/Register'>Sign Up</Link></li>


    </ul>
    <p>2018 Recipre Store, LLC.
    All right reserved.</p>
    </div>

    </footer>
    </div>
    );
    }
    }
    export default Register;
