import React from 'react';
import { connect } from 'react-redux';
import { Link}  from 'react-router-dom';

import Row from '../Row/Row';
import FloatingActionButton from '../../UI/FloatingActionButton/FloatingActionButton';
import classes from './MenuViewer.module.css';


const MenuViewer = (props) => {

    const items = props.cookies
    let firstRowItems = [];
    let secondRowItems = [];



    for(let i = 0; i< items.length; i++){
        if(i % 2 === 0){firstRowItems.push(items[i])}
        else{secondRowItems.push(items[i])}
    }
    console.log(firstRowItems);
    
    

    return(
        
            <div className={classes.MenuViewer}>
                <Row position={true} products={firstRowItems}/>
                <Row position={false} products={secondRowItems}/>
                <Link to="/cart">
                    <FloatingActionButton sum={props.sum}/>
                </Link>
            </div>
        
    )
};

const mapStateToProps = state => {
    return{
        sum: state.cart.sum
    }
};

export default connect(mapStateToProps)(MenuViewer);