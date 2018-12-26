import React, { Component } from 'react';
//import {Route} from 'react-router-dom';
//import './Maincourse.css'
//import HomePage from './Components/Pages/HomePage';
//import NavBar from './NavBar';
import {Link} from 'react-router-dom'
class About extends Component {
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

<div className ="About">

  <h1 >About Recipe Store</h1>

    <p> Recipe Store aims to provide opportunity to enjoy wholesome home-cooked meals with no planning, no shopping and no hassle required.
    Everything required for weeknight meals, carefully planned, locally sourced and delivered to your door at the most convenient time for each subscriber.
    Behind the scenes, a huge data driven technology platform puts us in the prime position for disrupting the food supply chain and for fundamentally changing the way consumers shop for food.
    </p>

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
      <li><Link to = '/ContributeRecipe'>Contribute Recipe</Link></li>


    </ul>
    <p>2018 Recipre Store, LLC.
    All right reserved.</p>
    </div>

    </footer>
  { /*<Route path="/NavBar" component={NavBar}/> */}
  {/*<Route path="/About" exact component={About}/>*/}
</div>
    )
  }
}
export default About;
