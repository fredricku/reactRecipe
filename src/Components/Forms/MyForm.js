
import React, { Component } from 'react';
//import './Maincourse.css'
import {Link} from 'react-router-dom'



class MyForm extends Component {
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

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.email);
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
      <form className="login" action="/login" method="post">

      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value = {this.handleEmail.data} size="25"/>
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value = {this.handlePassword.data} size="25"/>
      </p>
        <p> New user? <Link to = '/Register'>Register with us</Link></p>
      <button type="submit">Send</button>
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


    </ul>
    <p>2018 Recipre Store, LLC.
    All right reserved.</p>
    </div>

    </footer>
    </div>
    );
  }
}
export default MyForm;
