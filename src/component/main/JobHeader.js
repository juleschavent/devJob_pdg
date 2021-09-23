import "../../sass/sass_component/_jobHeader.scss";
import NoLogo from "../../assets/noLogo.png"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteForever';

import { ExternalLink } from "react-external-link";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { ConstContext } from "../context/ConstContext";

const JobHeader = ({ handleOpenModal }) => {

    const { theme } = useContext(ThemeContext);
    const { currentUser } = useAuth();
    const { companyDetails } = useContext(ConstContext);

    return (
        companyDetails &&
        <section className={"header__details " + (theme ? "header__details--light" : "header__details--dark")}>
            <img className="header__details__logo" src={"https://logo.clearbit.com/" + companyDetails[0].company_logo}
                onError={(e) => { e.target.src = NoLogo }}
                alt={"logo de " + companyDetails[0].company_name} />
            <div className="header__details__headings">
                <div className="header__details__headings__info">
                    <h2 className={"header__details__headings__info__title " + (theme ? "header__details__headings__info__title--light" : "header__details__headings__info__title--dark")}>{companyDetails[0].company_name}</h2>
                    <p className="header__details__headings__info__url">{companyDetails[0].company_logo}</p>
                </div>
                <ExternalLink href={companyDetails[0].company_website} style={{ textDecoration: 'none' }}><button className={"header__details__headings__btn " + (theme ? "header__details__headings__btn--light" : "header__details__headings__btn--dark")}>Company Site</button></ExternalLink>
            </div>
            {currentUser && <Link to="/jobupdate"><EditIcon className="header__details__editIcon" /></Link>}
            {currentUser && <DeleteIcon className="header__details__deleteIcon" onClick={handleOpenModal}/>}
        </section >
    );
}

export default JobHeader;