import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup } from './pages'
import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

// import { seedDatabase } from './seed'
// import { FirebaseContext } from './context/firebase'

function App() {
  // const { firebase } = useContext(FirebaseContext)
  // seedDatabase(firebase)

  const { user } = useAuthListener()
  console.log(user)
  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse/>
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup/>
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin/>
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home/>
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
