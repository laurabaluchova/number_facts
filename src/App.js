import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { Card_data } from "./Card_data";
import CardList from "./CardList";

class App extends Component {
  constructor() {
      super()
      this.state = {};
  }

  componentDidMount() {
    fetch('http://numbersapi.com/random/year?json')
      .then(resp => resp.json())
      .then(fact => this.setState({fact}));
  };

   render() {
    //console.log(this.state);
    const { fact } = this.state;
    let text = (fact?.text);  
            
    return (      
      <div>    
    <p>{text}</p>      
    <CardList cards = { Card_data } />  
    </div>
    );
  }
}

export default App;