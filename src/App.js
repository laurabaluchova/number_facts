import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { Card_data } from "./Card_data";
import CardList from "./CardList";

class App extends Component {
  constructor() {
      super()
      this.state = {};
      this.data = Card_data;
  }

  // componentDidMount() {
  //   fetch('http://numbersapi.com/random/year?json')
  //     .then(resp => resp.json())
  //     .then(fact => this.setState({fact}));
  // };

  render() {    
    // const { fact } = this.state;
    // let text = fact?.text;    
    // console.log(text);

    return (
      <div className="tc">
        <h1 className="f1">Number facts generator</h1>    
         <CardList card_data={ Card_data } />

      </div>
    );
  }
}

export default App;