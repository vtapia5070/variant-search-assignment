import React, { Component } from 'react';
import './GeneMappings.css';

class GeneMappings extends Component  {
  constructor() {
    super();
    this.state = {
      otherMappingsHidden: true,
    };
  }

  toggleGeneMappings = () => {
    this.setState({ otherMappingsHidden: !this.state.otherMappingsHidden });
  }

  render () {

    const mappings = this.props.mappings.split(',');

    const mappingDivs = mappings.map((mapping, index) => {
      return (<div key={`${mapping}_${index}`}>{mapping}</div>);
    });
    
    return (
      <div>
        {this.props.mappings && this.state.otherMappingsHidden ? (
          <span className="arrow" onClick={this.toggleGeneMappings}>
            &#9657;
          </span>
        ) : (
            <span className="arrow" onClick={this.toggleGeneMappings}>
              &#9663;
            </span>
          )
        }
        {this.props.nucleotideChange}
        {
          !this.state.otherMappingsHidden && (
            <div className="mappingItem">{mappingDivs}</div>
          )
        }
      </div>
    );
  }
};

export default GeneMappings;