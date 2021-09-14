import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../../firebase'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            console.log("USER", user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;