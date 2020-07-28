import React from 'react';

import classes from './AddToCartButton.module.css';

const AddToCartButton = (props) => (
    <button 
        style={{width: props.width, height: props.height, backgroundColor: props.color}}
        className={classes.Button}
        click={props.click}>
            {props.children}
    </button>
);

export default AddToCartButton;