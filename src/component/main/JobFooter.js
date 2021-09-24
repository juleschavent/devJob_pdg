import "../../sass/sass_component/_footer.scss";
import LogoDark from "../../assets/logo--blue.svg";
import GitHubIcon from "../../assets/mediaIcon/github.svg";
import LinkedInIcon from "../../assets/mediaIcon/linkedin.svg";
import FacebookIcon from "../../assets/mediaIcon/facebook.svg";

import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const JobFooter = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className={"footer " + (theme ? "footer--light" : "footer--dark")}>
            <div className="footer__content">
                <div className="footer__content__logo">
                    <Link to="/">
                        <img src={LogoDark} alt="Logo de DevJobs" className="footer__content__logo__svg" />
                    </Link>
                </div>
                <nav className="footer__content__about">
                    <h4 className={"footer__content__about__title " + (theme ? "footer__content__about__title--light" : "footer__content__about__title--dark")}>about</h4>
                    <ul className="footer__content__about__list">
                        <li className="footer__content__about__list__link">Legal notice</li>
                        <li className="footer__content__about__list__link">Company</li>
                        <li className="footer__content__about__list__link">Contact</li>
                        <li className="footer__content__about__list__link">Team</li>
                    </ul>
                </nav>
                <div className="footer__content__project">
                    <h4 className={"footer__content__project__title " + (theme ? "footer__content__project__title--light" : "footer__content__project__title--dark")}>devjobs</h4>
                    <p className="footer__content__project__desc">Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                </div>
            </div>
            <div className="footer__social">
                <div className="footer__social__icon">
                    <img src={GitHubIcon} alt="Logo de GitHub" className="footer__social__icon__svg" />
                    <img src={LinkedInIcon} alt="Logo de GitHub" className="footer__social__icon__svg" />
                    <img src={FacebookIcon} alt="Logo de GitHub" className="footer__social__icon__svg" />
                </div>
                { theme && <Link to="/" style={{textDecoration: 'none', color: '#19202D' }}><p className={"footer__social__copyright " + (theme ? "footer__social__copyright--light" : "footer__social__copyright--dark")}>devjobs © 2021</p></Link>}
                { !theme && <Link to="/" style={{textDecoration: 'none', color: '#FFF' }}><p className={"footer__social__copyright " + (theme ? "footer__social__copyright--light" : "footer__social__copyright--dark")}>devjobs © 2021</p></Link>}
            </div>
        </footer>
    );
}

export default JobFooter;