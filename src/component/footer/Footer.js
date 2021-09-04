// import "../../sass/sass_component/_footer.scss";
import "../../sass/sass_component/_footer--dark.scss";
import ApplyNow from "./ApplyNow";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerInfo">
                    <h3 className="footerInfo__title">Senior Software Engineer</h3>
                    <p className="footerInfo__subtitle">So Digital Inc.</p>
                </div>
                <ApplyNow />
            </div>
        </footer>
    );
}

export default Footer;