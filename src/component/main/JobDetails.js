import { useParams } from "react-router-dom";
//import { ExternalLink } from "react-external-link";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import JobHeader from "./JobHeader";

import JobContent from "./JobContent";

const JobDetails = () => {
    // Récupère via useParams la variable ID qui lui a été passée de JobList.js
    const { id } = useParams();
    const [companyDetails, setCompanyDetails] = useState(null)
    const [companyTechno, setCompanyTechno] = useState(null)
    const [companyTool, setCompanyTool] = useState(null)

    useEffect(() => {
        // req pour l'annonce qui a été cliquée grâce à variable ID
        axios.get(`http://localhost:3001/details/${id}`, {}).then((response) => {
            setCompanyDetails(response.data)
            console.log("get company", response.data);
        });

        axios.get(`http://localhost:3001/techno/${id}`, {}).then(
            (response) => {
                setCompanyTechno(response.data);
                console.log("get techno", response.data);
            }
        );

        axios.get(`http://localhost:3001/tool/${id}`, {}).then(
            (response) => {
                setCompanyTool(response.data);
                console.log("get tool", response.data);
            }
        );
    }, [])

    return (
        <>
            <JobHeader companyDetails={companyDetails} />

            <JobContent companyDetails={companyDetails} 
                        companyTechno={companyTechno} 
                        companyTool={companyTool}/>

            <Footer companyDetails={companyDetails} companyTechno={companyTechno} />
        </>
    );
}

export default JobDetails;

// Boucle sur companyDetails pour afficher les infos
//             {companyDetails && companyDetails.map((el, index) => (
//                 <div key={index}>
//                     <p>{el.company_name}</p>

//                     {/* Boucle sur companyTechno pour afficher les technos */}
//                     {companyTechno && companyTechno.map((el, index) => (
//                         <p key={index}>{el.technology_name}</p>
//                     ))}
//                     {/* Boucle sur companyTool pour afficher les tools */}
//                     {companyTool && companyTool.map((el, index) => (
//                         <p key={index}>{el.tool_name}</p>
//                     ))}

//                     <ExternalLink href={el.company_website}>
//                         <p>{el.company_website}</p>
//                     </ExternalLink>
//                     <p>{el.city_name}</p>
//                     <p>{el.company_adress}</p>
//                     <p>{el.company_description}</p>
//                 </div>
//             ))}