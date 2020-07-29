import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import CookiesMenu from './containers/CookiesMenu/CookiesMenu';
import Cart from './containers/Cart/Cart';
import Header from './containers/Header/Header.jsx';
class App extends Component {
  state ={}
  
  render(){
    return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' exact component={CookiesMenu} />
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;