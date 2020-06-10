import React, { Component } from 'react';
import NewElement from './new-element/NewElement';

export default class MovieList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        {console.log(this.props.games)}
         {this.props.games.map(g => (
            <NewElement games={g} key={g.name} />
          ))}
         
      </div>
      
    )
  }

}