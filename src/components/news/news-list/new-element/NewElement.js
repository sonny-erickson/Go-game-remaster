import React, { Component } from 'react';
import Style from './NewElement.module.scss';
import apiGames from '../../../conf/api.games';


export default class NewElement extends Component {

  state={
    img:this.props.games.background_image
  }

  
  render() {
    return (
      <div className={"w-50 p-2" + Style.container}>
        <div className="border d-flex">
          <img width="200" alt="film" src={this.state.img} />
          <div className="flex-fill d-flex flex-column p-3">
            {console.log(this.state.img)}
            <h3>{this.props.games.name}</h3>
            <hr className="w-100" />
            {/* {this.props.games.parent_platforms.map(p => (
            <p key={p.platform.name}>{p.platform.name}</p>
          ))} */}
            <span>{this.props.games.rating}/5</span>
          </div>
        </div>
      </div>
    );
  }

}