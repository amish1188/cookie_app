import React from 'react';

import Logo from '../Logo/Logo';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Header.module.css';


const Header = () => {
    return(
        <div className={classes.Header}>
            <Logo />
            <SideDrawer />
        </div>
    )
};

export default Header;