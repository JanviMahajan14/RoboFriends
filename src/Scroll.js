import React from 'react';

var divStyle = {
    border: '2px solid white',
    height: '550px',
    overflow: 'scroll'
}

const Scroll = (props) => {
    // uncomment to use ErrorBoundary
    // if (true) {
    //     throw new Error("NOOOO!")
    // }
    return (
        <div style={divStyle}>
            {props.children}
        </div>
    );
}

export default Scroll;
