import "../../sass/sass_component/_jobList.scss"
import MyDate from "../../assets/MyDate"
import NoLogo from "../../assets/noLogo.png"
import { AddCircle } from '@material-ui/icons';

import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ConstContext } from "../context/ConstContext";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const JobList = () => {

    const { theme } = useContext(ThemeContext);
    const { currentUser } = useAuth();
    const { companyList, technoList, companyName, location, remote } = useContext(ConstContext);

    // Fonctionnalité LoadMore
    const [visible, setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6);
    };

    // Système D pour afficher message d'erreur lorsqu'aucune entreprise ne correspond à la recherche
    let isCompany = [];
    let isLocation = [];
    if (companyList) {
        companyList.forEach(el => {
            if (el.company_remote <= remote) {
                isCompany.push(el.company_name)
                isLocation.push(el.city_name)
            }
        })
    }

    return (
        <>
            <main>
                {/* Si user est identifié et si aucune recherche ne correspond alors cacher le bouton add company pour afficher message d'erreur */}
                {currentUser ? (companyList && companyName !== '' && isCompany.some(el => el.toLowerCase().indexOf(companyName) === 0) === false) ||
                    (companyList && location !== '' && isLocation.some(el => el.toLowerCase().indexOf(location) === 0) === false) ? '' :
                    <div className="addCompany">
                        <Link to="/jobcreate">
                            <AddCircle className="addCompany__icon" />
                        </Link>
                        <p className="addCompany__toolTip">Add a new company</p>
                    </div> : ''
                }

                {companyList && companyList.slice(0, visible).map((el, id) => (
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
                            </div>
                        </Link>
                        : ""
                ))}

                {(companyList && companyName !== '' && isCompany.some(el => el.toLowerCase().indexOf(companyName) === 0) === false) ||
                    (companyList && location !== '' && isLocation.some(el => el.toLowerCase().indexOf(location) === 0) === false)
                    ?
                    <aside className="error">
                        <h2 className={"error__copy " + (theme ? "" : "error__copy--dark")}>No <span className="error__copy--highlight">company</span> or <span className="error__copy--highlight">location</span> matches your search</h2>
                        <div className="col-3">
                            <div className="snippet" data-title=".dot-bricks">
                                <div className="stage">
                                    <div className="dot-bricks"></div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    :
                    <div className="loadMore">
                        <button onClick={showMoreItems} className="loadMore__btn">Load More</button>
                    </div>}
            </main>
        </>
    );
}

export default JobList;