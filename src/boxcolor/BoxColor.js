import React from 'react';
import "./BoxColor.css";

const BoxColor = ({r, g, b}) => {
    const divStyle = {
        background: `rgb(${r},${g},${b})`
    };
    
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbText (r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    return <div className="boxColor-container" style={divStyle}>
        <h1 className="num1">RGB({r},{g},{b})</h1>
        <p className="num2">{rgbText(r,g,b)}</p>
    </div>
};


export default BoxColor;