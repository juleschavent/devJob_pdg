import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import JobFooter from "../main/JobFooter";
import { useContext, useEffect } from "react";
import JobHeader from "./JobHeader";
import { ConstContext } from "../context/ConstContext";

const JobDetails = () => {
    const { id } = useParams();
    const {
        companyDetails,
        handleCompanyDetails,
        companyTechno,
        handleCompanyTechno,
        companyTool,
        handleCompanyTool
    } = useContext(ConstContext)

    useEffect(() => {
        handleCompanyDetails(id)
        handleCompanyTechno(id)
        handleCompanyTool(id)
    }, [])

    return (
        <>
            <JobHeader />
            {companyDetails && companyDetails.map((el, index) => (
                <div key={index}>
                    <p>{el.company_name}</p>

                    {companyTechno && companyTechno.map((el, index) => (
                        <p key={index}>{el.technology_name}</p>
                    ))}
                    {companyTool && companyTool.map((el, index) => (
                        <p key={index}>{el.tool_name}</p>
                    ))}

                    <ExternalLink href={el.company_website}>
                        <p>{el.company_website}</p>
                    </ExternalLink>
                    <p>{el.city_name}</p>
                    <p>{el.company_adress}</p>
                    <p>{el.company_description}</p>
                </div>
            ))}
            <JobFooter />
        </>
    );
}

export default JobDetails;