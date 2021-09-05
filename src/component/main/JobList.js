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
                {/* {Data && Data.map((job, index) => (
                    <Link to={`/jobdetails/${job.id}`} key={index} style={{ textDecoration: "none" }}>
                        <div className="card">
                            <img src={Import(job.logo, "logo/")} alt={job.company} className="card__logo" />
                            <div className="addInfo">
                                <p className="addInfo__posted">{job.postedAt}</p>
                                <p className="addInfo__contract">{job.contract}</p>
                            </div>
                            <p className="card__position">{job.position}</p>
                            <p className="card__company">{job.company}</p>
                            <p className="card__location">{job.location}</p>
                        </div>
                    </Link>
                ))
                } */}

                {companyList && companyList.map((el, id) => (
                    <div className="card" key={id}>
                        <p>{el.company_name}</p>
                    </div>
                ))}

            </main>
            <LoadMore />
        </>
    );
}

export default JobList;