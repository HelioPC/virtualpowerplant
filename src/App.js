import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';


export default function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/create" exact>
        </Route>
        <Route path="/market" exact>
        </Route>
        <Route path="/about" exact>
        </Route>
      </Switch>
    </Router>
  );
}
