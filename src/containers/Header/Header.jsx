import React from 'react';

import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductLinksBar from '../../components/Navigation/ProductsLinks/ProductLinksBar/ProductLinksBar';
import classes from './Header.module.css';

const Header = () => (
    <div className={classes.Header}>
        <HeaderMenu />
        <SearchBar />
        <ProductLinksBar />
    </div>
);

export default Header;