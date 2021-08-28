import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup } from './pages'
// import { seedDatabase } from './seed'
// import { FirebaseContext } from './context/firebase'

function App() {
  // const { firebase } = useContext(FirebaseContext)
  // seedDatabase(firebase)
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.BROWSE}><Browse /></Route>
        <Route path={ROUTES.SIGN_UP}><Signup/></Route>
        <Route path={ROUTES.SIGN_IN}><Signin/></Route>
        <Route path={ROUTES.HOME}><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
