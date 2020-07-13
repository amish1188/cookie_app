import React from 'react';

import CardBig from '../../Cards/CardBig/CardBig';
import CardSmall from '../../Cards/CardSmall/CardSmall';
import classes from './Row.module.css';

const Row = (props) => {
   
    let row;
    if(props.position) {
        row = 
            <React.Fragment>
                <CardBig />
                <CardBig />
                <CardBig />
            </React.Fragment>
    }
    else {
        row = 
            <React.Fragment>
                <CardSmall />
                <CardBig />
                <CardBig />
            </React.Fragment>
    }  

   return(
        <div className={classes.Row}>
            {row}
        </div>
   )
}

export default Row;