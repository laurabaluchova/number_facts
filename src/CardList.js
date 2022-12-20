import React from "react";
import Card from "./Card";

const CardList = ({Card_data}) => {
    return (
    <div>
       {Card_data?.map((card, i) => {
        return (
        <Card 
            key={i} 
            url = {Card_data[i].url}
            picture = {Card_data[i].picture}            
        />
    );
    })
    }  
    </div>
    );
}

export default CardList;