import React from 'react';
import Card from './Card';
import { robot } from './robot.js';

const CardList = () => {

    let result = [];
    robot.forEach((value, index) =>
        result.push(<Card id={index} name={value.name} email={value.email} />)
    )
    return (
        <div>{result}</div>
    );
}

export default CardList;