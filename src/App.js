import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import CookiesMenu from './containers/CookiesMenu/CookiesMenu';

class App extends Component {
  state ={}
  
  render(){
    return(
      <Switch>
        <Route path='/cookies' exact component={CookiesMenu}></Route>
      </Switch>
    )
  }
}

export default App;