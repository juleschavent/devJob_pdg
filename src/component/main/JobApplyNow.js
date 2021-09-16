import { ExternalLink } from "react-external-link";
import "../../sass/sass_component/_applyNow.scss";

const JobApplyNow = ({ companyDetails }) => {
    return (
        companyDetails &&
        <ExternalLink href={companyDetails[0].company_website} >
            <button className="footer__container__btn">Apply Now</button>
        </ExternalLink>
    );
}

export default JobApplyNow;