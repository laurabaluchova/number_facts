import React from "react";
import Card from "./Card";

const CardList = ({card_data}) => {
    return (
    <div>
       {card_data.map((card, i) => {
        return (
        <Card 
            key={i} 
            url = {card_data[i].url}
            picture = {card_data[i].picture}            
        />);
    })
    }  
    </div>
    );
}

export default CardList;