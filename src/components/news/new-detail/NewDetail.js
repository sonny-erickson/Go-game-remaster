import React, { Component } from 'react';

export default class NewDetail extends Component {

  render() {
    return (
      <div className="w-25 border p-4 d-flex flex-column">
        <h5>NewDetail</h5>
        <hr className="w-100" />
        <div>
          <img className="d-block mx-auto" src="https://via.placeholder.com/150C/O"/>
        </div>
        <hr className="w-100" />
        <span className="text-secondary">Lorem</span>
        <span>Lorem</span>
      </div>
    );
  }

}