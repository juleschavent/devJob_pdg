import "../../sass/sass_component/_jobList.scss"
// import "../../sass/sass_component/_jobList--dark.scss"
import Import from '../../assets/Import'
import { Link } from 'react-router-dom'
import LoadMore from "./LoadMore";
import { useEffect, useState } from "react";
import axios from "axios";


const JobList = () => {

    const [companyList, setCompanyList] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3001/company").then((response) => {
            console.log(response);
            setCompanyList(response.data)
        });
    }, [])

    return (
        <>
            <main>

                {companyList && companyList.map((el, id) => (
                    <Link to={`/jobdetails/${el.company_id}`} className="card" key={id} style={{ textDecoration: "none" }}>
                        <div className="card">
                            <img src={Import("fokus.png", "logo/")} alt="" className="card__logo" />
                            <div className="addInfo">
                                <p className="addInfo__posted">{el.company_postedat}</p>
                                <p className="addInfo__contract">{el.company_remote}</p>
                            </div>
                            <h2 className="card__position">{el.company_name}</h2>
                            <div>
                                <p>{el.technology_name}</p>
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