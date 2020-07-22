import React, { Component } from 'react';

import classes from './AddButtonCard.module.css';

class AddButtonCard extends Component {
    state={};
    render() {
        return(
            <button className={classes.AddButtonCard} onClick={this.props.click}>+</button>
        );
    }
};

export default AddButtonCard;