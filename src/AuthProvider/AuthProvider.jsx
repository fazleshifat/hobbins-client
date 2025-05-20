import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    useEffect(() => {
        setUser(user)
        // console.log(user)
    }, [])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,

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