import React, { Component } from 'react';

import classes from './CardBig.module.css';
import AddButtonCard from '../../UI/Buttons/AddButtonCard/AddButtonCard';

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
                <React.Fragment>
                    <img className={classes.ProductImg}src={this.props.url} alt="cookie"/>
                    <div className={classes.TextContainer}>
                        <p className={classes.ProductName}>{this.props.name}</p>
                        <p className={classes.ProductDesc}>{this.props.desc}</p>
                        <p className={classes.Price}>{this.props.price}</p>
                    </div>
                    <AddButtonCard click={this.onClickHandler}></AddButtonCard>
                </React.Fragment>
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