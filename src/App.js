import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import classes from './Fixed.module.css';
import Header from './components/Header/Header.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ProductLinksBar from './components/Navigation/ProductsLinks/ProductLinksBar/ProductLinksBar.jsx';
import CookiesMenu from './containers/CookiesMenu/CookiesMenu';

class App extends Component {
  state ={}
  
  render(){
    return(
      <React.Fragment>
        <div className={classes.Fixed}>
          <Header />
          <SearchBar />
          <ProductLinksBar />
        </div>
        <Switch>
          <Route path='/cookies' exact component={CookiesMenu}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;