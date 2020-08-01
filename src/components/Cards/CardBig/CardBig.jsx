import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './CardBig.module.css';
import Front from './Front/Front';
import Back from './Back/Back';

class CardBig extends Component {
    state={
        clicked: false,
        productAdded: 1
    }

    
    OpenToAdd = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked,
            productAdded: 1
        }));
    }

    AddOne = () => {
        this.setState(prevState => ({
            productAdded: prevState.productAdded + 1
        }))
    }

    RemoveOne = () => {
        if(this.state.productAdded>1){
            this.setState(prevState => ({
                productAdded: prevState.productAdded - 1
            }))
        }
    }

    addProductToCart = () => {
        const product = {
            name: this.props.name,
            price: this.props.price, 
            url: this.props.url, 
            quantity: this.state.productAdded,
            color: this.props.color,
            colorDark: this.props.colorDark
        }
        this.props.addProductToCart(product)
        if(this.props.products>0){

            console.log(this.props.products);
        }
    }

    render() {
        let cardContent;
        if(!this.state.clicked){
            cardContent=
                <Front 
                    url={this.props.url}
                    name={this.props.name}
                    desc={this.props.desc}
                    price={this.props.price}
                    clickPlusButton={this.OpenToAdd}
                />
        } else {
            cardContent= 
            <Back 
                add={this.AddOne}
                remove={this.RemoveOne}
                quantity={this.state.productAdded}
                color={this.props.color}
                colorDark={this.props.colorDark}
                click={this.OpenToAdd}
                addToCart={this.addProductToCart}
            />
        }
        return(
            <div style={{backgroundColor: this.props.color}} className={classes.CardBig}>
               {cardContent}
            </div>
        )
    }
}; 

const mapStateToProps = state => {
    return{
        sum: state.cart.sum,
        products: state.cart.products
    };
};

const mapDispatchToProps = dispatch => {
    return{
        addProductToCart: (product) => dispatch({type: 'ADD_TO_CART', product: product })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardBig);