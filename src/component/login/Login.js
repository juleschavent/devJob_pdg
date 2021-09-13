import React, { useContext, useRef, useState } from 'react'
import { useAuth } from "../context/AuthContext"
import { useHistory } from "react-router-dom"
import '../../sass/sass_component/_login.scss'
import { ThemeContext } from '../context/ThemeContext';


export default function Login({ handleLoginModal }) {
    const { theme } = useContext(ThemeContext);

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { logout } = useAuth();

    const { currentUser } = useAuth();


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            // history.push("/")
            handleLoginModal()
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    async function handleLogout() {
        setError("")
        try {
            handleLoginModal()
            await logout()
            history.push("/")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <aside className="login">
            {!currentUser ?
                <form onSubmit={handleSubmit} className={"login__form " + (theme ? "login__form--light" : "login__form--dark")}>
                    <h2 className={"login__form__title " + (theme ? "login__form__title--light" : "login__form__title--dark")}>Login</h2>
                    {error && <p className="login__form__error">{error}</p>}
                    <input type="text" placeholder="email" ref={emailRef} className="login__form__input" />
                    <input type="password" placeholder="password" ref={passwordRef} className="login__form__input" />
                    <button type="submit" className="login__form__btn">Sign in</button>
                    <h4 onClick={handleLoginModal} className={"login__form__goBack " + (theme ? "login__form__goBack--light" : "login__form__goBack--dark")}>Go back</h4>
                </form>
                :
                <form className={"login__form " + (theme ? "login__form--light" : "login__form--dark")}>
                    <h2 className={"login__form__title " + (theme ? "login__form__title--light" : "login__form__title--dark")}>You are logged in has {currentUser.email}</h2>
                    <button onClick={handleLogout} className="login__form__btn">Logout</button>
                    <h4 onClick={handleLoginModal} className={"login__form__goBack " + (theme ? "login__form__goBack--light" : "login__form__goBack--dark")}>Go back</h4>
                </form>}
        </aside>
    )
}

// className = { "card " + (theme ? "card--light" : "card--dark") }
