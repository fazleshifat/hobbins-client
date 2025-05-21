import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    // setErrorMessage('')


    useEffect(() => {
        setUser(user)
        setErrorMessage('')
        // console.log(user)
    }, [])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const signInGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // to observe the authentic user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user)
                console.log(user.displayName)
                console.log(user.email)

            } else {
                setUser(null);
            }
            // setLoading(false);
        });


        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        signInGoogle,
        errorMessage,
        setErrorMessage,

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