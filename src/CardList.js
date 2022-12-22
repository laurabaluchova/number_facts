import React from "react";
import Card from "./Card";
import { Card_data } from "./Card_data";

const CardList = ({card_data}) => {
    return (
    <div className="flex justify-center">
       {card_data.map((card, i) => {
        return (
        <Card             
            card_data = {Card_data[i]}      
        />);
    })
    }  
    </div>
    );
}

export default CardList;