import React from 'react';
import "./BoxColor.css";

const BoxColor = ({r, g, b}) => {
    const divStyle = {
        background: `rgb(${r},${g},${b})`
    };
    return <div className="boxColor-container" style={divStyle}></div>
};


export default BoxColor;