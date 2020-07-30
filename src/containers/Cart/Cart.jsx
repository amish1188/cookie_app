import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardCart from '../../components/Cards/CardCart/CardCart';
import classes from './Cart.module.css';

class Cart extends Component {
    state = {  }
    render() {
        return (
            <div className={classes.CartContainer}>
                {this.props.products.map((item) => {
                    return(
                        <CardCart 
                            name={item.name}
                            price={item.price}/>
                    )
                })}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        sum: state.cart.sum,
        products: state.cart.products
    };
};

const mapDispatchToProps = dispatch => {
    return{
        addProductToCart: () => dispatch({type: 'ADD_TO_CART'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);