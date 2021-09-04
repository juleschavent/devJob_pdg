import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import "../../sass/sass_component/_header.scss"

const Header = () => {

    // partie de code JS

    return (
        // partie de code HTML
        <header className="header">
            <nav className="nav">
                <Link to="/">
                    <img src={Logo} alt="Logo de DevJobs" className="nav__logo" />
                </Link>
                <div className="nav__toggle">
                    {/* DARK MODE PLACE HOLDER / A CHANGER PAR LE DEFINITIF */}
                </div>
            </nav>
        </header>
    );
}

export default Header;