import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import "../../sass/sass_component/_header.scss"
import Toggle from "./Toggle";


const Header = () => {

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <img src={Logo} alt="Logo de DevJobs" className="header__nav__logo" />
                </Link>
                <Toggle />
            </nav>
        </header>
    );
}

export default Header;