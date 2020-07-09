import React from 'react';

import CardBig from '../../components/Cards/CardBig/CardBig';
import CardSmall from '../../components/Cards/CardSmall/CardSmall';
import classes from './MenuViewer.module.css';

const MenuViewer = () => {
    return(
        
            <div className={classes.MenuViewer}>
                <CardBig />
                <CardSmall />
            </div>
        
    )
};

export default MenuViewer;