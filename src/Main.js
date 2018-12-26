//import React from 'react';
import React, { Component } from 'react';
// import HomePage from './Components/Pages/HomePage';
//import Search from './Components/Search/SearchApp';
import Search from './Components/Search/Search';
//import {Route} from 'react-router-dom';
//import './Maincourse.css'
import {Link} from 'react-router-dom'
//import NavBar from  './NavBar';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //color: "ROSYBROWN",
      backgroundSize: "cover",
      image: ""
      // "url(http://sv1.upsieutoc.com/2018/04/15/background.jpg)"
    };
  }
  render() {
    const stylesObj = {
      background: this.state.image

    };
   return (

<div style={stylesObj} >

      <header className="gNav">
        <ul className="headerButtons">
          <li><Link to = '/HomePage'>Home</Link></li>
          <li><Link to = '/About'>About</Link></li>
          <li><Link to = '/Recipe'>Recipe</Link></li>
          <li><Link to = '/MyForm'>Login</Link></li>
          
        </ul>
      </header>
      <div id="header">
      <h1 className= "HomePage">Recipe Store</h1>
      <img src="http://sv1.upsieutoc.com/2018/04/15/backgrounda149d166c0843596.jpg" alt= " " width="250" height="113" border="0" />
      </div>
<div>
 <Search className="search-bar" />
</div>
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
export default Main;
