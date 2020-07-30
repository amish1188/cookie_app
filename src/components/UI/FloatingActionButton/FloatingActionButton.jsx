import React from 'react';

import classes from './FloatingActionButton.module.css';

const FloatingActionButton = (props) => {

    const content = props.sum > 0 ? 
        <button className={classes.FloatingActionButton}>
            <p>$ {props.sum}</p>
        </button> :
        null;

    return(
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};

export default FloatingActionButton;