import "../../sass/sass_component/_jobContent.scss";
import Import from "../../assets/Import";
import { ExternalLink } from "react-external-link";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


const JobContent = ({ companyDetails, companyTechno, companyTool }) => {

    const { theme } = useContext(ThemeContext);

    return (

        companyTool && companyTechno && companyDetails && companyDetails.map((el, idCompany) => (

            <article key={idCompany} className={"jobContent " + (theme ? "jobContent--light" : "jobContent--dark")}>

                <div className={"jobContent__duties " + (theme ? "jobContent__duties--light" : "jobContent__duties--dark")}>

                    <h2>Technos :</h2>

                    <div className="jobContent__duties__technos">
                        {companyTechno.map((el, idTechno) => (
                            <div key={idTechno} className={"jobContent__duties__technos__used " + (theme ? "jobContent__duties__technos__used--light" : "jobContent__duties__technos__used--dark")}>
                                <img src={Import(el.technology_name.toLowerCase() + ".svg", "technoLogo/")} alt=""
                                    title={el.technology_name} />
                            </div>
                        ))}
                    </div>

                    <h2>Tools:</h2>

                    <div className="jobContent__duties__tools">
                        {companyTool.map((el, idTool) => (
                            <div key={idTool} className={"jobContent__duties__tools__used " + (theme ? "jobContent__duties__tools__used--light" : "jobContent__duties__tools__used--dark")}>
                                <p>{el.tool_name}</p>
                            </div>

                        ))}

                        {/* <div className="jobContent__duties__tools__used">
                            <p>blablabla</p>
                        </div> */}

                    </div>

                </div>

                <div className="jobContent__separator"></div>

                <div className="jobContent__heading--desktop">
                    <div className="jobContent__heading">
                        <div className="jobContent__heading__header">
                            {/* <h4>Publié / mis à jour le: </h4> */}
                            <h4>Publié le: {el.company_postedat} </h4>

                            <h4> {el.company_front === 1 && el.company_back === 1
                                ? "Fullstack"
                                : (el.company_front === 1 && el.company_back === 0)
                                    ? "Front-End"
                                    : (el.company_back === 1 && el.company_front === 0)
                                        ? "Back-End"
                                        : "null"}</h4>

                        </div>
                        <h2 className={"jobContent__heading__title " + (theme ? "jobContent__heading__title--light" : "jobContent__heading__title--dark")}>{el.company_name}</h2>
                        <h3 className="jobContent__heading__location">{el.city_name}</h3>
                        <h3 className="jobContent__heading__address">{el.company_adress}</h3>
                    </div>

                    <button className="jobContent__btn">
                        <ExternalLink href={el.company_website}
                            style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}>
                            Company Website
                        </ExternalLink>
                    </button>

                </div>

                <div className="jobContent__separator"></div>

                <div className="jobContent__main">
                    <section className="jobContent__main__description">
                        <h3 className={"jobContent__main__title " + (theme ? "jobContent__main__title--light" : "jobContent__main__title--dark")}>Description</h3>
                        <p>{el.company_description}
                        </p>
                    </section>

                </div>
            </article>
        ))
    );

}

export default JobContent;
