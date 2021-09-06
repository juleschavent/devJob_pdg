import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import JobHeader from "./JobHeader";

const JobDetails = () => {
    const { id } = useParams();
    const [companyDetails, setCompanyDetails] = useState(null)

    console.log("params id", id)

    useEffect(() => {
        axios.get("http://localhost:3001/company").then((response) => {
            console.log(response);
            setCompanyDetails(response.data)
        });
    }, [])

    return (
        <>
            <JobHeader />
            <div>
                {companyDetails && companyDetails.map((el, index) => (
                    parseInt(id) === el.company_id ?
                        <p key={index}>{el.company_name}</p>
                        : ""
                ))}
            </div>
            <Footer />
        </>
    );
}

export default JobDetails;