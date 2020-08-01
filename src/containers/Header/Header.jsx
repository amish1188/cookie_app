import React from 'react';
import { useLocation } from 'react-router-dom';

import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductLinksBar from '../../components/Navigation/ProductsLinks/ProductLinksBar/ProductLinksBar';
import classes from './Header.module.css';

const Header = () => {
    
    let location = useLocation();
    const style = location.pathname === '/' ? 
        <div className={classes.Header}>
            <HeaderMenu />
            <SearchBar />
            <ProductLinksBar />
        </div> :
        <div className={classes.Header2}>
            <HeaderMenu />
        </div>

    return(
        <React.Fragment>
            {style}
        </React.Fragment>
    )
};

export default Header;