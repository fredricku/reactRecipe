import React from 'react';
//import { render } from 'react-dom';

const Result = ({results}) => {
  return results.map(result => <div key = {result}>{result}</div>);
}

const Search = (props) => {
  const {
    searchQuery,
    onChange,
    search
  } = props;

  return <div className = "search-bar">
    <input
      type="text"
      value={searchQuery}
      onChange={onChange}
    />
    <button onClick={search}>Search</button>
  </div>;
}

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      results: []
    }

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearchQueryChange(e) {
    this.setState({searchQuery: e.target.value});
  }

  onSearch() {
    // Simulate  call
    setTimeout(() => {
      this.setState({results: [0, 1, 2, 3, 4]});
    }, 1000)
  }

  render() {
    const {results, searchQuery} = this.state;

    return <div>
      <Search
        searchQuery={searchQuery}
        onChange={this.onSearchQueryChange}
        search={this.onSearch}
      />
      <Result results={results} />
    </div>;
  }
}
export default Container
