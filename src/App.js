import React, {Component} from 'react';
import './App.css';
import {Header, Footer} from './components';
import{NewList, NewDetail} from './components/news/index';
import { BrowserRouter as Router} from 'react-router-dom';
import apiGames from './components/conf/api.games';
import Loading from './components/utili/Loading'


class App extends Component {
    constructor(props) {
    super(props)
    this.state={
      games: [],
      selectedGame:0,
      loading:false
   }}

  componentDidMount() {
    
    apiGames.get("dates=2020-01-01,2020-12-12&ordering=-added")
     .then(res => {
          const games = res.data.results;         
          this.updateGames(games);
        })
      .catch(err => console.log(err));
  }

 updateGames = (games)=>{
        this.setState({
          games,
          loading:true
        })
      }
  
  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
           { this.state.loading ? (
              <>
                <h1 className="d-flex justify-content-center">Home</h1>
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                  <NewList games={this.state.games}/>
                  
                </div>
              </>
            ) : (
          <Loading />
            )}
          
          <Footer/>
        </div>
      </Router>
  );
  }
  
}

export default App;
