import "../../sass/sass_component/_footer.scss";
// import "../../sass/sass_component/_footer--dark.scss";
import ApplyNow from "./ApplyNow";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container__info">
                    <h3 className="footer__container__info__title">Senior Software Engineer</h3>
                    <p className="footer__container__info__subtitle">So Digital Inc.</p>
                </div>
                <ApplyNow />
            </div>
        </footer>
    );
}

export default Footer;