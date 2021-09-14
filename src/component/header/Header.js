import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import "../../sass/sass_component/_header.scss"
import Toggle from "./Toggle";
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from "react";
import Login from "../login/Login";


const Header = () => {

    const [loginModal, setLoginModal] = useState(false)

    const handleLoginModal = () => {
        setLoginModal(!loginModal)
        // console.log(loginModal)
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav__left">
                    <Link to="/">
                        <img src={Logo} alt="Logo de DevJobs" className="header__nav__logo" />
                    </Link>
                    <SettingsIcon className="header__nav__icon" onClick={handleLoginModal} />
                    {loginModal && <Login handleLoginModal={handleLoginModal} />}
                </div>
                <Toggle />
            </nav>
        </header>
    );
}

export default Header;