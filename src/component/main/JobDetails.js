import { useParams } from "react-router-dom";
import JobFooter from "../main/JobFooter";
import { useContext, useEffect } from "react";
import JobHeader from "./JobHeader";
import { ConstContext } from "../context/ConstContext";
import TechnoChoice from "./TechnoChoice";

import JobContent from "./JobContent";

const JobDetails = () => {
    const { id } = useParams();
    const {
        companyDetails,
        handleCompanyDetails,
        companyTechno,
        handleCompanyTechno,
        companyTool,
        handleCompanyTool,
    } = useContext(ConstContext)

    useEffect(() => {
        handleCompanyDetails(id)
        handleCompanyTechno(id)
        handleCompanyTool(id)
    }, [])

    return (
        <>
            <JobHeader />
            <JobContent companyDetails={companyDetails}
                companyTechno={companyTechno}
                companyTool={companyTool} />
            <JobFooter />
        </>
    );
}

export default JobDetails;