import React from 'react';

import classes from './AddProductButton.module.css';
const AddProductButton = (props) => {
    return(
        <button style={{backgroundColor: props.color}} className={classes.AddProductButton} onClick={props.click}>{props.children}</button>
    )
};

export default AddProductButton;