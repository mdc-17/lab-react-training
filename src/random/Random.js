import React from 'react';

const Random = ({min, max}) => {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return (
        <div className="random-container">
            <div> <p> Numero random entre {min} y {max} = {randomNumber} </p> </div>
        </div>
    );
};

export default Random;