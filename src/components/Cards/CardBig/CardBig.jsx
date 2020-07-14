import React from 'react';

import classes from './CardBig.module.css';

const CardBig = (props) => {
    return(
        <div style={{backgroundColor: props.color}} className={classes.CardBig}></div>
    )
};

export default CardBig;