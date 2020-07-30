import React, { Component } from 'react';

import classes from './CardCart.module.css';

class CardCart extends Component {
    render() {
        return(
            <div className={classes.CardCart}>
                <img className={classes.CardCartIcon} alt='cookie'/>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
    
        
    
}

export default CardCart;