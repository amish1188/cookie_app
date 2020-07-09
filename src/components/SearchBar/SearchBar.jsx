import React from 'react';

import classes from './SearchBar.module.css';

const SearchBar = () => {
    return(
        <div className={classes.SearchBar}>
            <input placeholder="Search here"/>
            <p>Icon</p>
        </div>
    )
};

export default SearchBar;