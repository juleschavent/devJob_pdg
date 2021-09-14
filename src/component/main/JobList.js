import "../../sass/sass_component/_jobList.scss"
import LoadMore from "./LoadMore";
import MyDate from "../../assets/MyDate"
import NoLogo from "../../assets/noLogo.png"
import EditIcon from '@material-ui/icons/Edit';

import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ConstContext } from "../context/ConstContext";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../context/AuthContext";

const JobList = () => {

    const { theme } = useContext(ThemeContext);

    const { companyList } = useContext(ConstContext);
    const { technoList } = useContext(ConstContext);

    const { companyName } = useContext(ConstContext);
    const { location } = useContext(ConstContext);
    const { remote } = useContext(ConstContext);

    const { currentUser } = useAuth();

    // Système D pour afficher message d'erreur lorsqu'aucune entreprise ne correspond à la recherche
    let isCompany = [];
    if (companyList) {
        companyList.forEach(el => {
            isCompany.push(el.company_name)
        });
    }

    return (
        <>
            <main>
                {companyList && companyList.map((el, id) => (
                    (el.company_remote <= remote &&
                        (el.company_name.toLowerCase().indexOf(companyName) === 0 &&
                            el.city_name.toLowerCase().indexOf(location) === 0))
                        ?
                        <Link to={`/jobdetails/${el.company_id}`} key={id} style={{ textDecoration: "none" }}>
                            <div className={"card " + (theme ? "card--light" : "card--dark")}>
                                <img src={"https://logo.clearbit.com/" + el.company_logo}
                                    onError={(e) => { e.target.src = NoLogo }}
                                    alt={"logo de " + el.company_name}
                                    className={"card__logo " + (theme ? "card__logo--light" : "card__logo--dark")} />
                                <h2 className={"card__companyName " + (theme ? "card__companyName--light" : "card__companyName--dark")}>{el.company_name}</h2>
                                {MyDate() - parseInt(el.company_postedat) < 30 ?
                                    <p className="card__isNew">New</p> : ""}
                                <p className="card__isRemote">{el.company_remote === 1 ? "No remot work" : "Remote"}</p>
                                <div className="card__technoList">
                                    {technoList && technoList.map((techno, idTechno) => (
                                        el.company_id === techno.company_id ?
                                            <p key={idTechno} className="card__technoList__techno">{techno.technology_name}</p>
                                            : ""
                                    ))}
                                </div>
                                <p className="card__city">{el.city_name}</p>
                                {currentUser && <EditIcon className="card__editIcon" />}
                            </div>
                        </Link>
                        : ""
                ))}
            </main>

            {companyList && companyName !== '' && isCompany.some(el => el.toLowerCase().indexOf(companyName) >= 0) === false ?
                <aside>
                    <h2>No company matches your search...</h2>
                </aside> : ""}

            <LoadMore />
        </>
    );
}

export default JobList;