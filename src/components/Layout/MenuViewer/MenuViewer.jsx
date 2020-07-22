import React from 'react';

import Row from '../Row/Row';
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
            </div>
        
    )
};

export default MenuViewer;