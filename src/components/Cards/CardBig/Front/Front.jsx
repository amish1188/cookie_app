import React from 'react';

import classes from './Front.module.css';
import AddButtonCard from '../../../UI/Buttons/AddButtonCard';

const Front = (props) => {

    return(
        <React.Fragment>
            <img className={classes.ProductImg}src={props.url} alt="cookie"/>
            <div className={classes.TextContainer}>
                <p className={classes.ProductName}>{props.name}</p>
                <p className={classes.ProductDesc}>{props.desc}</p>
                <p className={classes.Price}>{props.price}</p>
            </div>
             <AddButtonCard click={props.clickPlusButton}></AddButtonCard>
        </React.Fragment>
    )
};

export default Front;