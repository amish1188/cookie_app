import React from 'react';

import classes from './CardSmall.module.css';

const CardSmall = (props) => {
    return(
        <div style={{backgroundColor: props.color}} className={classes.CardSmall}></div>
    )
};

export default CardSmall;