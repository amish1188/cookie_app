import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import MenuViewer from '../MenuViewer/MenuViewer';
import ProductLinksBar from '../../components/Navigation/ProductsLinks/ProductLinksBar/ProductLinksBar';

class CookiesMenu extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <SearchBar />
                <ProductLinksBar />
                <MenuViewer />
            </React.Fragment>
        )
    }
}
 
export default CookiesMenu;