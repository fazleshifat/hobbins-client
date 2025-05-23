import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(true)
    // setErrorMessage('')


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // to observe the authentic user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            setUser(user)
            setLoading(false)

            // to always see the ser info at consol
            console.log(user)
        });


        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signInGoogle,
        loading,
        setLoading,
        errorMessage,
        setErrorMessage,
        // location,
        // navigate


    }


    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;