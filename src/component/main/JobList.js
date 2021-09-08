import "../../sass/sass_component/_jobList.scss"
import LoadMore from "./LoadMore";
import MyDate from "../../assets/MyDate"
import NoLogo from "../../assets/noLogo.png"

import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";

const JobList = () => {

    const { theme } = useContext(ThemeContext);
    const [companyList, setCompanyList] = useState(null)
    const [technoList, setTechnoList] = useState(null)

    useEffect(() => {
        // Get la liste des entreprises, req principale
        axios.get("http://localhost:3001/companyList").then((response) => {
            console.log(response);
            setCompanyList(response.data);
        });

        //get la liste des technos par entreprise, sert à boucler dans la boucle principale pour afficher chaque techno d'une entreprise
        axios.get("http://localhost:3001/techno").then((response) => {
            console.log(response);
            setTechnoList(response.data);
        });

    }, [])

    return (
        <>
            <main>
                {companyList && companyList.map((el, id) => (
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
                ))}
            </main>
            <LoadMore />
        </>
    );
}

export default JobList;