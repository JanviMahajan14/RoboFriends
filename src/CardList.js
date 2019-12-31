import React from 'react';
import Card from './Card';
import robot from './robot.js';
import Searchbox from './Searchbox';

const CardList = () => {

    let result = [];
    robot.forEach((value, index) =>
        result.push(<Card key={index} id={index} name={value.name} email={value.email} />)
    )
    return (
        <div className="tc">
            <h1>ROBOFRIENDS</h1>
            <Searchbox />
            <div>{result}</div>
        </div>
    );
}

export default CardList;