import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import BackArrow from '../UI/Buttons/BackArrow/BackArrow';
import classes from './HeaderMenu.module.css';


const HeaderMenu = () => {
    let location = useLocation();
    let content = location.pathname=== '/cart' ? 
        <div className={classes.HeaderMenu}>
            <Link to="/"><BackArrow /></Link>
            <p>Cart</p>
        </div> :
        <div className={classes.HeaderMenu}>
            <Logo />
            <SideDrawer />
        </div>

    return(
        <React.Fragment>
            {content}
        </React.Fragment>
    )
};

export default HeaderMenu;