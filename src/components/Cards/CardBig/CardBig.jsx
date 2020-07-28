import React, { Component } from 'react';

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
            clicked: !prevState.clicked
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
                number={this.state.productAdded}
                color={this.props.color}
                colorDark={this.props.colorDark}
                click={this.OpenToAdd}
            />
        }
        return(
            <div style={{backgroundColor: this.props.color}} className={classes.CardBig}>
               {cardContent}
            </div>
        )
    }
}; 

export default CardBig;