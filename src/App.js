
import React, { Component } from 'react';
//import logo from './logo.svg';
import {Route} from 'react-router-dom';
//import './App.css';
import Main from './Main';
import About from './Components/Pages/About';
import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/LoginPage/Login';
//import LoginForm from './Components/Forms/LoginForm';
import MyForm from './Components/Forms/MyForm';
//import NavBar from './Components/Pages/NavBar';
import ContributeRecipe from './Components/Forms/ContributeRecipe';
import InlineErrors from './Components/Messages/InlineErrors';
import Recipe from './Components/Pages/Recipe';
//import './Maincourse.css'
import BackgroundImage from './Components/Pages/BackgroundImage';
import Dessert from './Components/Pages/Dessert';
import Drinks from './Components/Pages/Drinks';
import Maincourse from './Components/Pages/Maincourse';
import './Components/styles/styles.css'

import RecipeView from './Components/Pages/RecipeView';
//import 'semantic-ui-css/semantic-ui.min.css';
//class App extends Component {
class App extends Component {

  render() {
     return (

<div className = "ui container">
  <Route path = "/" exact component ={Main}/>
  <Route path="/About"  component={About}/>
  <Route path="/HomePage"  component={HomePage}/>
  <Route path="/Recipe" exact component={Recipe}/>

  <Route path="/LoginPage" exact component={LoginPage}/>
  <Route path="/Maincourse" exact component={Maincourse}/>
  <Route path="/Drinks" exact component={Drinks}/>
  <Route path="/Dessert" exact component={Dessert}/>
    <Route path="/BackgroundImage" exact component={BackgroundImage}/>
    <Route path="/ContributeRecipe" exact component={ContributeRecipe}/>

  <Route path="/InlineErrors" exact component={InlineErrors}/>
  <Route path="/MyForm" exact component={MyForm}/>
  <Route path="/:recipe" exact component={RecipeView}/>

</div>
);
}
}

export default App;
