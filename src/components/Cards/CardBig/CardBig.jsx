import React, { Component } from 'react';

import classes from './CardBig.module.css';
import Front from './Front/Front';

class CardBig extends Component {
    state={
        clicked: false
    }

    
    onClickHandler = () => {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
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
                    clickPlusButton={this.onClickHandler}
                />
        } else {
            cardContent= 
            <React.Fragment>
                <p>Back Side</p>
            </React.Fragment>
        }
        return(
            <div style={{backgroundColor: this.props.color}} className={classes.CardBig}>
               {cardContent}
            </div>
        )
    }
}; 

export default CardBig;