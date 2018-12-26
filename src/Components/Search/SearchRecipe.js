
import React, { Component } from 'react'

//import  recipies from '../data/drinkRecipes.json'
import  recipies from './pages/drinks'

import Search from '../Search/SearchApp';

class SearchedRecipes extends Component {
  constructor() {
    super()
    this.state = {
      recipies: [],
      searchedRecipe: []
    }
  }

  componentWillMount() {
    this.setState({
      recipies,
      searchedRecipe: recipies
    })
  }

searchedRecipe = (search) => {
    let searchedRecipe = this.state.recipies
    searchedRecipe = searchedRecipe.filter((recipe) => {
      let recipeName = recipe.Name.toLowerCase() + recipe.photo.toLowerCase()+ recipe.discription.toLowerCase()
      return recipeName.indexOf(
        search.toLowerCase()) !== -1
    })
    this.setState({
      searchedRecipe
    })
  }

  render() {
    return (
      <Search recipies={this.state.searchedRecipe} match={this.props.match} onChange={this.filterRecipies} />
    )
  }
}

export default SearchedRecipes
