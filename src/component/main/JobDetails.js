import { useParams } from "react-router-dom";
import Data from "../../assets/data.json";
import Import from '../../assets/Import'
import { ExternalLink } from "react-external-link";
import Footer from "../footer/Footer";

const JobDetails = () => {
    const { id } = useParams();

    return (
        <>
            <div>
                {Data && Data.map((job, index) => (
                    job.id === parseInt(id) ?
                        <article key={index}>
                            <div>
                                <img src={Import(job.logo, "logo/")} alt={job.company} />
                                <p>{job.company}</p>
                                <p>{job.company.toLocaleLowerCase()}.com</p>
                                <button><ExternalLink href={job.website}>Company Site</ExternalLink></button>
                            </div>
                            <div>
                                PLACERHOLDER WAITING FOR HTML/CSS WORK
                                {/* PLACERHOLDER WAITING FOR HTML/CSS WORK */}
                            </div>
                        </article>
                        : ""
                ))}
            </div>
            <Footer />
        </>
    );
}

export default JobDetails;