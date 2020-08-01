import React from 'react';

import classes from './Back.module.css';
import AddProductButton from '../../../UI/Buttons/AddProductButton/AddProductButton';
import AddToCartButton from '../../../UI/Buttons/AddToCartButton/AddToCartButton';
import CloseButton from '../../../UI/Buttons/CloseButton/CloseButton';

const Back = (props) => {
    return(
        <React.Fragment>
            <div className={classes.CloseButtonPosition}>
                <CloseButton click={props.click}/>
            </div>
            <div className={classes.BackContainer}>
                {/* you can make component out of it */}
                <AddProductButton color={props.color} click={props.add}>+</AddProductButton>
                <div className={classes.Number}>{props.quantity}</div>
                <AddProductButton color={props.color} click={props.remove}>-</AddProductButton>
                {/* -------------------------------- */}
                <AddToCartButton
                    click={() => {props.addToCart(); props.click()}}
                    width={'70%'}
                    height={'20%'}
                    color={props.quantity > 0 ? props.colorDark : '#B4B4B4'}>
                        Add
                </AddToCartButton>
            </div>   

        </React.Fragment>
    )
};

export default Back;