
import React, { Component } from 'react';

import {Route} from 'react-router-dom';

import Main from './Main';
import About from './Components/Pages/About';
import HomePage from './Components/Pages/HomePage';

import MyForm from './Components/Forms/MyForm';


import Recipe from './Components/Pages/Recipe';
import Register from './Components/Forms/Register';

import BackgroundImage from './Components/Pages/BackgroundImage';
import Dessert from './Components/Pages/Dessert';
import Drinks from './Components/Pages/Drinks';
import Maincourse from './Components/Pages/Maincourse';
import './Components/styles/styles.css'
import RecipeView from './Components/Pages/RecipeView';
import StarRating from './Components/Pages/StarRating';
class App extends Component {

  render() {
     return (

<div className = "ui container">
  <Route path = "/" exact component ={Main}/>
  <Route path="/About"  component={About}/>
  <Route path="/HomePage"  component={HomePage}/>
  <Route path="/Recipe" exact component={Recipe}/>
  <Route path="/Maincourse" exact component={Maincourse}/>
  <Route path="/Drinks" exact component={Drinks}/>
  <Route path="/Dessert" exact component={Dessert}/>
    <Route path="/BackgroundImage" exact component={BackgroundImage}/>
    <Route path="/Register" exact component={Register}/>
  <Route path="/StarRating" exact component={StarRating}/>
  <Route path="/MyForm" exact component={MyForm}/>
  <Route path="/RecipeView" exact component={RecipeView}/>


</div>
);
}
}

export default App;
