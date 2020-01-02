import React from 'react';

const Searchbox = (props) => {
    return (
        <input type="search" className="f4 bg-light-blue pa1 tc br2 search" placeholder="Search robots" onInput={props.searchChange} />
    );
}

export default Searchbox;