import React from 'react';

const Greetings = ({lang, children}) => {
    return (
        <div className="greetings-container">
            <div lang={lang}>{children}</div>
        </div>
    );
};

export default Greetings;