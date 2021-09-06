import { ExternalLink } from "react-external-link";
// import "../../sass/sass_component/_jobHeader.scss";
import "../../sass/sass_component/_jobHeader--dark.scss";
import TempLogo from "../../assets/noLogo.png"

const JobHeader = () => {

    return (
        <section className="header__details">
            <img className="header__details__logo" src={TempLogo} alt="" />
            <div className="header__details__headings">
                <div className="header__details__headings__info">
                    <h2 className="header__details__headings__info__title">tempCompany</h2>
                    <p className="header__details__headings__info__url">tempWeb.com</p>
                </div>
                <ExternalLink href="" style={{ textDecoration: 'none' }}><button className="header__details__headings__btn">Company Site</button></ExternalLink>
            </div>
        </section>
    );
}

export default JobHeader;