
import React, { Component } from 'react';
import VegeData from './data/vegeterianRecipes'
import MeatData from './data/meatRecipes'
//import RecipeView from '../Pages/RecipeView/RecipeView'
import {Link} from 'react-router-dom'



class Maincourse extends Component {


    constructor(props){
            super(props);
            this.style = {
              height: 400,
              width:300


            };
        }


  render() {


 const meat = MeatData.map(item=> <section key ={item.photo} >
   <div><Link to = {{pathname: '/RecipeView',
   state: {description: item.discription, photo: item.photo,
     name: item.name,
     instructions:item.instructions,
     title:item.title,
     title2:item.title2,
     ingredients:item.ingredients, type: "meat"} }}>
     <img src={process.env.PUBLIC_URL +`/${item.photo}`} alt={item.photo}/>
     </Link></div>
  <div>{item.discription} </div> </section>)

  const vegeterian = VegeData.map(item=> <section key ={item.photo} >
    <div><Link to = {{pathname: '/RecipeView',
    state: {description: item.discription, photo: item.photo,
    name: item.name,
    instructions:item.instructions,
    title:item.title,
    title2:item.title2,
    ingredients:item.ingredients, type: "meat"} }}>
    <img src={process.env.PUBLIC_URL +`/${item.photo}`} alt={item.photo}/>
    </Link></div>
   <div>{item.discription} </div> </section>)
     return (

       <div className = "main-container">
         <div className ="header">
         <header className="gNav">
               <ul className="headerButtons">
               <li><Link to = '/HomePage'>Home</Link></li>
               <li><Link to = '/About'>About</Link></li>
               <li><Link to = '/Recipe'>Recipe</Link></li>
               <li><Link to = '/MyForm'>Login</Link></li>
             </ul>

         </header>
         <h1 className ="maincourse-menu">Main course menu</h1>

         </div>


       <div className = "main-course-grid">
         <div className = "main-meat-grid">
           <h2>Meat</h2>

            {meat}

         </div>
         <div className = "main-vegetarian-grid">
           <h2>Vegetarian</h2>
           {vegeterian}
         </div>
       </div>

       {/* <Route path="/NavBar" component={NavBar}/>*/ }
       {/*<Route path="/About" exact component={About}/>*/}
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
     export default Maincourse;
