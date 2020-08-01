import React from 'react';
import { useLocation } from 'react-router-dom';

import AddProductButton from '../Buttons/AddProductButton/AddProductButton';
import classes from './Counter.module.css';

const Counter = (props) => {
    let location = useLocation();
    return(
        <div className={location.pathname === '/cart' ? classes.CartCounter : classes.Counter}>
            <AddProductButton
                colorDark={props.colorDark} 
                color={props.color} 
                // click={props.add}
            >+</AddProductButton>
            <div style={{color: props.colorDark}}className={classes.Number}>{props.quantity}</div>
            <AddProductButton
                colorDark={props.colorDark} 
                color={props.color} 
                //click={props.remove}
            >-</AddProductButton>
        </div>
    )
}

export default Counter;