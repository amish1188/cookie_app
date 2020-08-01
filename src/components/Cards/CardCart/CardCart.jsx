import React, { Component } from 'react';

import classes from './CardCart.module.css';

class CardCart extends Component {
    render() {
        return(
            <div style={{backgroundColor:this.props.backgroundColor}}className={classes.CardCart}>
                <img className={classes.CardCartIcon}src={this.props.url} alt='cookie'/>
                <div className={classes.Text}>
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </div>
            </div>
        )
    }
    
        
    
}

export default CardCart;