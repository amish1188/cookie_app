import React from 'react';

import Logo from '../Logo/Logo';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './HeaderMenu.module.css';


const HeaderMenu = () => {
    return(
        <div className={classes.HeaderMenu}>
            <Logo />
            <SideDrawer />
        </div>
    )
};

export default HeaderMenu;