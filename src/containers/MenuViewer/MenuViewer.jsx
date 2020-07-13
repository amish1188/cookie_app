import React from 'react';

import Row from '../../components/Layout/Row/Row';
import classes from './MenuViewer.module.css';

const MenuViewer = () => {
    return(
        
            <div className={classes.MenuViewer}>
                <Row position={true}/>
                <Row position={false}/>
            </div>
        
    )
};

export default MenuViewer;