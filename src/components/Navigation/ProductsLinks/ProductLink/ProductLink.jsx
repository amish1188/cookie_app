import React from 'react';

import classes from './ProductLink.module.css';

const ProductLink = (props) => {
    return(
        <div className={classes.ProductLink}>
            <p>{props.children}</p>
        </div>
    )
};

export default ProductLink;