import React from 'react';

import CardBig from '../../Cards/CardBig/CardBig';
import CardSmall from '../../Cards/CardSmall/CardSmall';
import classes from './Row.module.css';
import { cookies } from '../../../data'; 

const Row = (props) => {
   
    const colorsLeft = ['#FFDAC1', '#FEB7B2', '#E2F1CC'];
    let indexNumLeft = -1;
    const colorsRight = ['#C8CFEA', '#B5EBD7', '#FADE9D'];
    let indexNumRight = 0;

    let row;

    if(props.position) {
        row = cookies.map(() => {
                indexNumLeft++;
                if(indexNumLeft > 2){indexNumLeft = 0}
                return(<CardBig color={colorsLeft[indexNumLeft]} />);
            });
    }
    else { //right row will always have one small card at the start which will inform about promos
        row = 
            <React.Fragment>
                <CardSmall color={'#C8CFEA'} />
                {cookies.map(() => {
                    indexNumRight++;
                    if(indexNumRight> 2){indexNumRight = 0}
                    return(<CardBig color={colorsRight[indexNumRight]} />);
                })}
            </React.Fragment>
    }  

   return(
        <div className={classes.Row}>
            {row}
        </div>
   )
}

export default Row;