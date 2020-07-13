import React from 'react';

import ProductLink from '../ProductLink/ProductLink';
import classes from './ProductLinksBar.module.css';

const ProductLinksBar = () => {
    return(
        <div className={classes.ProductLinksBar}> 
            <ProductLink>Cookies</ProductLink>
            <ProductLink>Cupcakes</ProductLink>
            <ProductLink>Boxes</ProductLink>
            <div className={classes.Line}></div>
        </div>
    )
};

export default ProductLinksBar;