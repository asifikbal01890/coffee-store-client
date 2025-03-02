import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const signIn = (email, pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const profileUpdate = (name, photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    const resetPass = email =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    // const firebaseRemoveUser = () => {
    //     setLoading(true)
    //     console.log(auth.currentUser);
        
    //     return deleteUser( auth.currentUser)
    // }

const removeUser = (empass) =>{
    return reauthenticateWithCredential( auth.currentUser, empass)
} 

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        profileUpdate,
        resetPass,
        logOut, 
        removeUser,
        loading,
        setLoading
    }
    


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;