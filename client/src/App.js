import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      data: [],
      searchQuery: ''
    };
  }

  componentDidMount () {
    this.fetchGenes('a');
    // fetch('/data')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('res:', data);
    //     // console.log('state:', this.state);
    //     // this.setState(data);
    //     // todo concat prev state with new data
    //   });
  }

  fetchGenes (query) {
    fetch(`/genes?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('res:', data);
        // console.log('state:', this.state);
        // this.setState(data);
        // todo concat prev state with new data
      });
  }

  handleChange = (event) => {
    this.setState({ 
      ...this.state,
      searchQuery: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label htmlFor="gene_search">Gene:</label>
          <input type="text" id="name" name="gene_search" value={this.state.searchQuery} onChange={this.handleChange} />
        </header>
      </div>
    );
  }
}

export default App;
