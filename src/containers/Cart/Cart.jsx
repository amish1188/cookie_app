import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    state = {  }
    render() {
        return (
        <div>this is cart</div>
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