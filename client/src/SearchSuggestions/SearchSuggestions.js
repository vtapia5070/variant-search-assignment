import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SearchSuggestions = (props) => {
  const listItems = props.suggestions.map((suggestion) => {
    return (
      <ListItem button divider onClick={props.handleClick} key={`${suggestion.geneName}_suggestion`}>
        <ListItemText primary={suggestion.geneName} />
      </ListItem>
    );
  });

  return (
    <List component="nav" >
      {listItems}
    </List>
  );
};

export default SearchSuggestions;