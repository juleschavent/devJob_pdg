import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import JobHeader from "./JobHeader";
import { ConstContext } from "../context/ConstContext";
import TechnoChoice from "./TechnoChoice";
import JobContent from "./JobContent";
import JobDelete from "./JobDelete";

const JobDetails = () => {

    // ouvrir le modal pour delete une entreprise
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

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
            <JobHeader handleOpenModal={handleOpenModal} />
            {openModal && <JobDelete handleOpenModal={handleOpenModal} companyDetails={companyDetails} />}
            <JobContent companyDetails={companyDetails}
                companyTechno={companyTechno}
                companyTool={companyTool}
                id={id} />
        </>
    );
}

export default JobDetails;