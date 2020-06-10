import React, { Component } from 'react';

export default class NewElement extends Component {

  
  render() {
    return (
      <div className="w-50 p-2">
        <div className="border d-flex">
          <img width="150" height="200" alt="film" src="https://via.placeholder.com/150C/O" />
          <div className="flex-fill d-flex flex-column p-3">
            <h3>{this.props.games.name}</h3>
            <hr className="w-100" />
            <span>NewElement</span>
          </div>
        </div>
      </div>
    );
  }

}