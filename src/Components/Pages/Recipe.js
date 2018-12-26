import React, { Component } from 'react';
//import {Route} from 'react-router-dom';
//import './Maincourse.css'
//import HomePage from './Components/Pages/HomePage';
//import NavBar from './NavBar';

import {Link} from 'react-router-dom'
class Recipe extends Component {
  render() {
    return (

<div className = "background">
      <header className="gNav">
        <ul className="headerButtons">
          <li><Link to = '/HomePage'>Home</Link></li>
          <li><Link to = '/About'>About</Link></li>
          <li><Link to = '/Recipe'>Recipe</Link></li>
          <li><Link to = '/MyForm'>Login</Link></li>
          <li><Link to = '/ContributeRecipe'>Login</Link></li>
        </ul>
      </header>

<h1> Recipe Menu</h1>


<ul className="Menu">
  <li><Link to = '/Maincourse'>Main Course</Link></li>
  <li><Link to = '/Dessert'>Dessert</Link></li>
  <li><Link to = '/Drinks'>Drinks</Link></li>

<li><Link to = '/ContributeRecipe'>Contribute Recipe</Link></li>
</ul>


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
  <li><Link to = '/About'>About us</Link></li>
  <li><Link to = '/ContributeRecipe'>Contribute Recipe</Link></li>


</ul>
<p>2018 Recipre Store, LLC.
All right reserved.</p>
</div>

</footer>
  {/* <Route path="/NavBar" component={NavBar}/>*/ }
  {/*<Route path="/About" exact component={About}/>*/}
</div>
    )
  }
}
export default Recipe;
