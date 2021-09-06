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

                {companyList && companyList.map((el, id) => (
                    <Link to={`/jobdetails/${el.company_id}`} key={id} style={{ textDecoration: "none" }}>
                        <div>
                            <img src={"https://logo.clearbit.com/" + el.company_logo}
                                onError={(e) => { e.target.src = NoLogo }}
                                alt={"logo de " + el.company_name} />
                            <div>
                                <p>{el.company_remote === 1 ? "Remote" : "No remote work"}</p>
                                {MyDate() - parseInt(el.company_postedat) < 30 ? <p>Rencently added</p> : ""}
                            </div>
                            <h2>{el.company_name}</h2>
                            <div>
                                {technoList && technoList.map((techno, idTechno) => (
                                    el.company_id === techno.company_id ?
                                        <p key={idTechno}>{techno.technology_name}</p>
                                        : ""
                                ))}
                            </div>
                            <p>{el.city_name}</p>
                        </div>
                    </Link>
                ))}

            </main>
            <LoadMore />
        </>
    );
}

export default JobList;