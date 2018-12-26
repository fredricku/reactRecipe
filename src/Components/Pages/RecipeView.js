
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import StarRating from '../Pages/StarRating';

class RecipeView extends Component {


  constructor() {
      super();
      this.style = {
         height: 400,
         width: 300
      };

}
  render() {
      console.log(this.props.location.state)
      var name;
      var description;
      var photo;
      var ingredients;
      var instructions;
      var title;
      var title2
      let props = this.props.location.state
      if(props !== undefined){
          name = props.name
          description = props.description
          photo = props.photo
          ingredients = props.ingredients
          instructions = props.instructions
          title = props.title
          title2 = props.title2
      }

      console.log(name);
      console.log(description)
      console.log(photo);
      console.log(ingredients)
      console.log(instructions);
      console.log(title);
      console.log(title2);

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
<div className="Recipe-View">
<div>
  <h1>{name}</h1>
 <div style={this.style}><img src = {photo} width={500} height={300} alt=""/></div>
<div className = "StarRating">
<StarRating  className = "StarRating"/>
</div>
 <div className="ingredients">
 <h2>{title}</h2>
 {ingredients}
</div>
 </div>
 <div>
 <div className="instructions">
 <h2>{title2}</h2>
 {instructions}
 </div>
 </div>
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
export default RecipeView;
