import React from 'react';

import classes from './AddProductButton.module.css';
const AddProductButton = (props) => {
    return(
        <button style={{backgroundColor: props.color, color:props.colorDark, borderColor: props.colorDark}} className={classes.AddProductButton} onClick={props.click}>{props.children}</button>
    )
};

export default AddProductButton;