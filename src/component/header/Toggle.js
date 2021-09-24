import IconSun from "../../assets/icon-sun.svg"
import IconMoon from "../../assets/icon-moon.svg"
import "../../sass/sass_component/_toggle.scss"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Toggle = () => {

    const { toggleTheme } = useContext(ThemeContext)

    return (
        <div className="nav__toggle">
            <img src={IconSun} alt="Icone du soleil pour mode clair" />
            <div className="toggle__container">
                <input type="checkbox" id="toggle" name="toggle" onClick={toggleTheme}></input>
                <label aria-label="toggle pout mode sombre" htmlFor="toggle" />
            </div>
            <img src={IconMoon} alt="Icone de la lune pour mode sombre" />
        </div>
    );
}

export default Toggle;