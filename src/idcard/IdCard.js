import React from 'react';

const IdCard = ({picture, firstName, lastName, gender, height, birth}) => {
    return (
        <div className="container">
            <div>
            <img src={picture} alt="user-pic"/>
            </div>
            <div>
                <ul>
                    <li><b>First Name:</b> {firstName}</li>
                    <li><b>LastName:</b> {lastName}</li>
                    <li><b>Gender:</b> {gender}</li>
                    <li><b>Height:</b> {height}</li>
                    <li><b>Birth:</b> {birth}</li>
                </ul>
            </div>
        </div>
    );
};

export default IdCard;