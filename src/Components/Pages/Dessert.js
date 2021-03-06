
import React, { Component } from 'react';
import DessertData from './data/dessertRecipes'
import {Link} from 'react-router-dom'

class Dessert extends Component {


  render() {


 const dessert = DessertData.map(item=> <section key ={item.photo} ><div><Link to = {{pathname: '/RecipeView',
 state: {description: item.discription, photo: item.photo,
 name: item.name,
 instructions:item.instructions,
 title:item.title,
 title2:item.title2,
 ingredients:item.ingredients, type: "meat"} }}><img src={process.env.PUBLIC_URL +`/${item.photo}`} alt={item.photo}/></Link></div>
  <div>{item.discription} </div> </section>)


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

<h1 className="dessert-h1"> Dessert Menu</h1>
<div className="dessert"> {dessert}</div>

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


</ul>
<p>2018 Recipre Store, LLC.
All right reserved.</p>
</div>

</footer>

</div>
    )
  }
}
export default Dessert;
