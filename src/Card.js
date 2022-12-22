import React, { Component } from "react";

class Card extends Component {
    constructor(card_data) {
        super(card_data)
        this.state ={};
    }
  
    componentDidMount() {
        this.fetchData();        
    };

    fetchData() {
        fetch(`http://numbersapi.com/random/${this.props.card_data.url}?json`)
        .then(resp => resp.json())
        .then(fact => this.setState({fact}));
    };

    render() {
        const { fact } = this.state;
        let text = fact?.text;
        console.log(text);
        return (        
            <div className="tc bg-white br3 pa3 ma4 bw2 shadow-5 w-20">
                <img className="w-60" alt="icon" src={require(`${this.props.card_data.picture}`)} />
                <div>                    
                    <h3>{text}</h3>
                    <button onClick={ () => this.fetchData()} className="pa2 bg-washed-blue br3 ba bw2 b--near-black hover-bg-black hover-white">
                        {`Generate random ${this.props.card_data.url} fact`}</button>  
                </div>
            </div>
        );
    }
}
export default Card;
