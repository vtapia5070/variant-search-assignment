import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import VariantsTable from './VariantsTable/VariantsTable.js';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      searchData: [],
      variantsData: [],
      isSuggestionListHidden: false,
    };
  }

  fetchGenes (query) {
    fetch(`/genes/search?search=${query}`)
      .then((res) => {
        if (res.status === 500) {
          return res.json()
            .then((json) => {
              const { message, stackTrace } = json;
              throw new Error(message, stackTrace);
            });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          ...this.state,
          searchData: data.data,
        });
      });
  }

  fetchVariantsByGene (query) {
    fetch(`/genes?name=${query}`)
      .then((res) => {
        if (res.status === 500) {
          return res.json()
            .then((json) => {
              const { message, stackTrace } = json;
              throw new Error(message, stackTrace);
            });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({
          ...this.state,
          variantsData: data.data,
        });
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
        {
          this.state.variantsData.length > 0 && (
            <section>
              <VariantsTable variantsData={this.state.variantsData} />
            </section>
          )
        }
      </div>
    );
  }
}

export default App;
