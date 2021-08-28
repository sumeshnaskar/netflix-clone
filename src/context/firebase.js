import { createContext } from "react";

import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

export const FirebaseContext = createContext(null)

export default function FirebaseContextProvider({ children }){
    const config = {
        apiKey: "AIzaSyD3zJhJQcYtFj9pHHNuelSvGpWSl4TOj8w",
        authDomain: "netflix-clone-85a1c.firebaseapp.com",
        projectId: "netflix-clone-85a1c",
        storageBucket: "netflix-clone-85a1c.appspot.com",
        messagingSenderId: "547668836621",
        appId: "1:547668836621:web:8493aae2682a311d9eb044"    
    }
    
    const firebase = Firebase.initializeApp(config);
    
    return(
        <FirebaseContext.Provider value = {{ firebase }}>
            {children}
        </FirebaseContext.Provider>
    )
}
