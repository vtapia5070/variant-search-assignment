import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions.js';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        margin="normal"
        onChange={props.onChange}
      />
      {
        !props.isSuggestionListHidden && (
          <SearchSuggestions 
          suggestions={props.geneMatches} 
          handleClick={props.selectGene} 
          />
        )
      }
    </div>
  );
}

export default SearchBar;
