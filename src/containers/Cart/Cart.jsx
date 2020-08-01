import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardCart from '../../components/Cards/CardCart/CardCart';
import classes from './Cart.module.css';

class Cart extends Component {
    state = {  }
    render() {
        console.log(this.props.products);
        let content;
        this.props.products.length > 0 ? content =  
            <div className={classes.CartContainer}>
                {this.props.products.map((item) => {
                    return(
                        <CardCart 
                            name={item.name}
                            url={item.url}
                            price={item.price} 
                            backgroundColor={item.backgroundColor} />
                    )
                })}
            </div> :
        content = 
            <div className={classes.CartContainer}>
                <p>Cart is Empty</p>
            </div>
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
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