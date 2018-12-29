import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      searchData: [],
      variantData: [],
      isSuggestionListHidden: false,
    };
  }

  fetchGenes (query) {
    fetch(`/genes/search?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          searchData: data.data,
        });
      }).catch(function (error) {
        console.log(error);
      });
  }

  fetchVariantsByGene (query) {
    fetch(`/genes?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          variantData: data.data,
        });
      }).catch(function (error) {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ ...this.state, isSuggestionListHidden: false })
    this.fetchGenes(event.target.value);
  }

  getGeneVariants = (event) => {
    const gene = event.target.innerText;
    this.setState({...this.state, isSuggestionListHidden: true})
    this.fetchVariantsByGene(gene);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            onChange={this.handleChange} 
            geneMatches={this.state.searchData} 
            selectGene={this.getGeneVariants}
            isSuggestionListHidden={this.state.isSuggestionListHidden} 
          />
        </header>
        <section>
          
        </section>
      </div>
    );
  }
}

export default App;
