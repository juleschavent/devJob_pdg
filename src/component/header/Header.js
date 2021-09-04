import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import IconSun from "../../assets/icon-sun.svg"
import IconMoon from "../../assets/icon-moon.svg"
import "../../sass/sass_component/_header.scss"


const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">
                    <img src={Logo} alt="Logo de DevJobs" className="nav__logo" />
                </Link>
                <div className="nav__toggle">
                    <img src={IconSun} alt="Icone du soleil pour mode clair" />
                    <div className="toggle__container">
                        <input type="checkbox"
                            id="toggle" name="toggle"></input>
                        <label for="toggle">
                        </label>
                    </div>
                    <img src={IconMoon} alt="Icone de la lune pour mode sombre" />
                </div>
            </nav>
        </header>
    );
}

export default Header;