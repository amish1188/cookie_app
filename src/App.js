import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Cookies from './containers/Cookies/Cookies';

class App extends Component {
  state ={}
  
  render(){
    return(
      <Switch>
        <Route path='/cookies' exact component={Cookies}></Route>
      </Switch>
    )
  }
}

export default App;