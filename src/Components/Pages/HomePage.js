import React, { Component } from 'react';
//import {Route} from 'react-router-dom';
//import './Maincourse.css'
//import HomePage from './Components/Pages/HomePage';
//import About from './Components/Pages/About';
//import NavBar from './Components/Pages/NavBar';
import Search from '../Search/Search';

// import SearchRecipe from '../Search/SearchRecipe';
import {Link} from 'react-router-dom'
class HomePage extends Component {
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
      <div id="header">
      <h1 className= "HomePage">Recipe Store</h1>

    </div>

      <Search className="search-bar" />



<footer className =  "footer">

<div className="fLeft">
  <ul>
    <li><a href="https://www.facebook.com/login.php?login_attempt=1&lwv=110">Facebook</a></li>
    <li><a href="https://www.instagram.com/accounts/emailsignup/?hl=en">Instagram</a></li>
    <li><a href="https://twitter.com/login?lang=en">Twitter</a></li>
    <li><Link to = '/ContributeRecipe'>Contribute Recipe</Link></li>
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
    )
  }
}
export default HomePage;
