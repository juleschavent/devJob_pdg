import { ExternalLink } from "react-external-link";
import "../../sass/sass_component/_jobHeader.scss";
// import "../../sass/sass_component/_jobHeader--dark.scss";
import NoLogo from "../../assets/noLogo.png"

const JobHeader = ({ companyDetails }) => {

    // console.log("companyTest", companyDetails)
    // console.log(companyDetails[0].company_website)

    return (
        companyDetails &&
        <section className="header__details">
            <img className="header__details__logo" src={"https://logo.clearbit.com/" + companyDetails[0].company_logo}
                onError={(e) => { e.target.src = NoLogo }}
                alt={"logo de " + companyDetails[0].company_name} />
            <div className="header__details__headings">
                <div className="header__details__headings__info">
                    <h2 className="header__details__headings__info__title">{companyDetails[0].company_name}</h2>
                    <p className="header__details__headings__info__url">{companyDetails[0].company_logo}</p>
                </div>
                <ExternalLink href={companyDetails[0].company_website} style={{ textDecoration: 'none' }}><button className="header__details__headings__btn">Company Site</button></ExternalLink>
            </div>
        </section>
    );
}

export default JobHeader;