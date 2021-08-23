import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

const config = {
    apiKey: "AIzaSyD3zJhJQcYtFj9pHHNuelSvGpWSl4TOj8w",
    authDomain: "netflix-clone-85a1c.firebaseapp.com",
    projectId: "netflix-clone-85a1c",
    storageBucket: "netflix-clone-85a1c.appspot.com",
    messagingSenderId: "547668836621",
    appId: "1:547668836621:web:8493aae2682a311d9eb044"    
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value = {{ firebase: window.firebase }}>
            <GlobalStyles />
            <App/>
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
