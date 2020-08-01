import React, { Component } from 'react';

import Counter from '../../UI/Counter/Counter';
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
                <Counter 
                    color={this.props.backgroundColor}
                    quantity={this.props.quantity}
                    colorDark={this.props.colorDark}
                    />
            </div>
        )
    }
    
        
    
}

export default CardCart;