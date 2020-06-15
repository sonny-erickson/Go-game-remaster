import React, { Component } from 'react';
import Style from './NewElement.module.scss';
import apiGames from '../../../conf/api.games';


export default class NewElement extends Component {

  state={
    img:this.props.games.background_image
  }

  
  render() {
    return (
      <div className={"d-flex p-2 " + Style.container}>
       
          <img width="200" alt="film" src={this.state.img} />
          <div className="flex-fill d-flex flex-column p-3">
            {console.log(this.state.img)}
            <h5>{this.props.games.name}</h5>
            <hr className="w-100" />
            {/* {this.props.games.parent_platforms.map(p => (
            <p key={p.platform.name}>{p.platform.name}</p>
          ))} */}
            <span>{this.props.games.rating}/5</span>
            <p className="flex-fill"></p>
            <div className="d-flex flex-row justify-content-end">
              <button className="btn-primary btn-sm">More infos</button>
            </div>

          </div>
        </div>
      
    );
  }

}