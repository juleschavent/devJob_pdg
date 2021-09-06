import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import JobHeader from "./JobHeader";

const JobDetails = () => {
    // Récupère via useParams la variable ID qui lui a été passée de JobList.js
    const { id } = useParams();
    const [companyDetails, setCompanyDetails] = useState({})
    const [companyTechno, setCompanyTechno] = useState(null)

    useEffect(() => {
        // req 
        axios.get(`http://localhost:3001/details/${id}`, {}).then((response) => {
            setCompanyDetails(response.data)
            // console.log("get company", response.data);
        });

        axios.get(`http://localhost:3001/techno/${id}`, {}).then(
            (response) => {
                setCompanyTechno(response.data);
                console.log("get techno tool", response.data);
            }
        );
    }, [])

    return (
        <>
            <JobHeader />
            {/* {companyDetails && companyDetails.map((el, index) => (
                <div key={index}>
                    <p>{el.company_name}</p>
                </div>
            ))} */}
            {companyTechno && companyTechno.map((el, index) => (
                <p>{el.tool_name}</p>
            ))}
            <Footer />
        </>
    );
}

export default JobDetails;