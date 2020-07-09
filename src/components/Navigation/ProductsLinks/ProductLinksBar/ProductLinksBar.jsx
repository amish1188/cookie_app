import React from 'react';

import ProductLink from '../ProductLink/ProductLink';
import classes from './ProductLinksBar.module.css';

const ProductLinksBar = () => {
    return(
        <div className={classes.ProductLinksBar}> 
            <ProductLink />
            <ProductLink />
            <ProductLink />
            <div className={classes.Line}></div>
        </div>
    )
};

export default ProductLinksBar;