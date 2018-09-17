import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import NoMatch from './components/NoMatch'

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/menu" component={Menu}/>
      <Route component={NoMatch}/>
    </Switch>
  </Fragment>
)

export default App
