import "../../sass/sass_component/_footer.scss";
import ApplyNow from "./ApplyNow";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { ConstContext } from "../context/ConstContext";

const Footer = () => {

    const { theme } = useContext(ThemeContext);
    const { companyDetails, companyTechno } = useContext(ConstContext)

    return (
        companyDetails && companyTechno &&
        <footer className={"footer " + (theme ? "footer--light" : "footer--dark")}>
            <div className="footer__container">
                <div className="footer__container__info">
                    {companyTechno.map((el, index) => (
                        <div key={index}>
                            <h3 className={"footer__container__info__title " + (theme ? "footer__container__info__title--light" : "footer__container__info__title--dark")}>{el.technology_name}</h3>
                        </div>
                    ))}
                    <p className="footer__container__info__subtitle">{companyDetails[0].company_name}</p>
                </div>
                <ApplyNow companyDetails={companyDetails} />
            </div>
        </footer>
    );
}

export default Footer;