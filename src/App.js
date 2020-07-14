import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import CookiesMenu from './containers/CookiesMenu/CookiesMenu';
import Header from './containers/Header/Header.jsx';
class App extends Component {
  state ={}
  
  render(){
    return(
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' exact component={CookiesMenu}></Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;