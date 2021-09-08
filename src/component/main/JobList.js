import "../../sass/sass_component/_jobList.scss"
import LoadMore from "./LoadMore";
import MyDate from "../../assets/MyDate"
import NoLogo from "../../assets/noLogo.png"

import { Link } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ConstContext } from "../context/ConstContext";

const JobList = () => {

    const { theme } = useContext(ThemeContext);

    const { companyList } = useContext(ConstContext);
    const { technoList } = useContext(ConstContext);

    const { companyName } = useContext(ConstContext);
    const { location } = useContext(ConstContext);


    return (
        <>
            <main>
                {companyList && companyList.map((el, id) => (
                    (companyName === "" && location === "") ||
                        (el.company_name.toLowerCase().indexOf(companyName) === 0 && el.city_name.toLowerCase().indexOf(location) === 0) ?
                        <Link to={`/jobdetails/${el.company_id}`} key={id} style={{ textDecoration: "none" }}>
                            <div className={"card " + (theme ? "card--light" : "card--dark")}>
                                <img src={"https://logo.clearbit.com/" + el.company_logo}
                                    onError={(e) => { e.target.src = NoLogo }}
                                    alt={"logo de " + el.company_name}
                                    className={"card__logo " + (theme ? "card__logo--light" : "card__logo--dark")} />
                                <h2 className={"card__companyName " + (theme ? "card__companyName--light" : "card__companyName--dark")}>{el.company_name}</h2>
                                {MyDate() - parseInt(el.company_postedat) < 30 ?
                                    <p className="card__isNew">New</p> : ""}
                                <p className="card__isRemote">{el.company_remote === 1 ? "Remote" : "No remote work"}</p>
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
                {companyName !== "" ? <p>No company match your search</p> : ""}
            </main>
            <LoadMore />
        </>
    );
}

export default JobList;