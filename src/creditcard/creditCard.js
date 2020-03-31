import React from 'react'
import "./creditCard.css";

function creditCard(props) {
    console.log(props);
    const divStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgcolor}`
    };
    return (
        <div>
            <div className="creditCard" type={props.type} style={divStyle}>
                <img src={`$props.type ==='Visa' ? 'img/visa.png' : ''}
                ${props.type ==='Master Card' ? '/img/master-card.svg' : ''} `} alt="" className ="logo"/>
                <p className="numCreditCard">{props.number}</p>
                <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.owner}</p>
                <p>Bank: {props.bank}</p>
            </div>
        </div>
    )
}

export default creditCard
