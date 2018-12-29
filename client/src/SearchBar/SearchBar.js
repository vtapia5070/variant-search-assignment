import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './SearchBar.css';

class SearchBar extends Component {

  renderSuggestedSearchItems () {
    console.log(this.props.geneMatches);
    return this.props.geneMatches.map((gene) => (
      <div 
        className="suggestedItem" 
        key={gene.geneName}
        onClick={this.props.selectGene}
      >
        {gene.geneName}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          // className={classes.textField}
          // TODO: add value placeholder for selected option
          margin="normal"
          onChange={this.props.onChange}
        />
        {
          !this.props.isSuggestionListHidden && (
            <div className="suggestionList">
              {this.renderSuggestedSearchItems()}
            </div>
          )
        }
      </div>
    );
  }
}

export default SearchBar;
