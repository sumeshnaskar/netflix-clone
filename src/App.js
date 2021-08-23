import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { Home, Signin, Signup } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.BROWSE}></Route>
        <Route path={ROUTES.SIGN_UP}><Signup/></Route>
        <Route path={ROUTES.SIGN_IN}><Signin/></Route>
        <Route path={ROUTES.HOME}><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
