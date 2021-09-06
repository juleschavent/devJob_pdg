import "../../sass/sass_component/_jobList.scss"
// import "../../sass/sass_component/_jobList--dark.scss"
import { Link } from 'react-router-dom'
import LoadMore from "./LoadMore";
import { useEffect, useState } from "react";
import axios from "axios";
import NoLogo from "../../assets/noLogo.png"
import MyDate from "../../assets/MyDate"


const JobList = () => {

    const [companyList, setCompanyList] = useState(null)
    const [technoList, setTechnoList] = useState(null)

    console.log(MyDate())

    useEffect(() => {
        //get la liste des entreprises
        axios.get("http://localhost:3001/company").then((response) => {
            console.log(response);
            setCompanyList(response.data);
        });

        //get la liste des technos par entreprise
        axios.get("http://localhost:3001/techno").then((response) => {
            console.log(response);
            setTechnoList(response.data);
        });

    }, [])

    return (
        <>
            <main>

                {/* Boucle sur companyList pour afficher chaque éléments du tableau */}
                {companyList && companyList.map((el, id) => (
                    // Link redirige vers la page JobDetails correspondant à l'annonce
                    <Link to={`/jobdetails/${el.company_id}`} key={id} style={{ textDecoration: "none" }}>
                        <div className="card">
                            <img src={"https://logo.clearbit.com/" + el.company_logo}
                                onError={(e) => { e.target.src = NoLogo }}
                                alt={"logo de " + el.company_name}
                                className="card__logo" />
                            <h2 className="card__companyName">{el.company_name}</h2>
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