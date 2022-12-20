import React from "react";

const Card = ({ url, picture }) => {
    console.log(picture);
    return (        
        <div className="tc bg-silver dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="icon" src={require(`${picture}`)} />
            <div>
              <h2>{`There will appear your random ${url} fact`}</h2>
              <button>Click to generate</button>  
            </div>
        </div>
    );
}

export default Card;