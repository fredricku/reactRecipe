import React, { Component } from 'react'


class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })

     // this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className = "search-bar">
        <label htmlFor="search"><span>Search Recipe</span></label>
        <input type="text" id="search" size= "40"
          value={this.state.search}
          onChange={this.handleChange}/>
        <button type="submit" >Search</button>
      </div>
      )
  }
}
export default SearchForm
