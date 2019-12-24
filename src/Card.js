import React from 'react';

const Card = (props) => {

    return (
        <div className="tc bg-light-green dib br3 pd3 mr8 grow shadow-5 ">
            <img src={'https://robohash.org/' + props.id} alt="photo" width="200px" height="200px" />
            <h2 className="f3">{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;