import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.confing";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut ,  signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app);

// main
const AuthProvider = ({children}) => {
    
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

//create user with email password
 const createUser =(email, password) => {
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
 }


//signInUserWithEmailAndPassword
const signInUser= (email, password)=> {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
}


 //logout
 const logOut = () => {
    setLoading(true)
    return signOut(auth)
}



//objerve onAuthStateChanged  use manage user
useEffect( () => {
    
   const unSubscirbe =  onAuthStateChanged(auth, currentUser => {
        // console.log('objerve user' , currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
       unSubscirbe()
    }
},[])

  

    const authInfo = {user, createUser, signInUser, logOut, loading}
     
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};




AuthProvider.propTypes ={
    children: PropTypes.object,
}
export default AuthProvider;