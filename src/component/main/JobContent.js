import "../../sass/sass_component/_jobContent.scss";
import Import from "../../assets/Import";
import { ExternalLink } from "react-external-link";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const JobContent = ({ companyDetails, companyTechno, companyTool }) => {
  const { theme } = useContext(ThemeContext);

  return (
    companyTool &&
    companyTechno &&
    companyDetails &&
    companyDetails.map((el, id) => (
      <article
        key={id}
        className={
          "jobContent " + (theme ? "jobContent--light" : "jobContent--dark")
        }
      >
        <div
          className={
            "jobContent__duties " +
            (theme ? "jobContent__duties--light" : "jobContent__duties--dark")
          }
        >
          <h2>Technos :</h2>

          <div className="jobContent__duties__technos">
            {companyTechno.map((el, id) => (
              <div
                className={
                  "jobContent__duties__technos__used " +
                  (theme
                    ? "jobContent__duties__technos__used--light"
                    : "jobContent__duties__technos__used--dark")
                }
              >
                <img
                  src={Import(
                    el.technology_name.toLowerCase() + ".svg",
                    "technoLogo/"
                  )}
                  alt=""
                  title={el.technology_name}
                />
              </div>
            ))}
          </div>

          <h2>Tools:</h2>

          <div className="jobContent__duties__tools">
            {companyTool.map((el, id) => (
              <div
                className={
                  "jobContent__duties__tools__used " +
                  (theme
                    ? "jobContent__duties__tools__used--light"
                    : "jobContent__duties__tools__used--dark")
                }
              >
                <p>{el.tool_name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="jobContent__separator"></div>

        <div className="jobContent__heading--desktop">
          <div
            className={
              "jobContent__heading " +
              (theme
                ? "jobContent__heading--light"
                : "jobContent__heading--dark")
            }
          >
            <h4 className={"jobContent__heading__date " + ( theme ? "jobContent__heading__date--light" : "jobContent__heading__date--dark")}>
              Publié le: {el.company_postedat}{" "}
            </h4>

            <div
              className={
                "jobContent__heading__header " +
                (theme
                  ? "jobContent__heading__header--light"
                  : "jobContent__heading__header--dark")
              }
            >
              <h4>
                {" "}
                {el.company_front === 1 && el.company_back === 1
                  ? "Fullstack"
                  : el.company_front === 1 && el.company_back === 0
                  ? "Front-End"
                  : el.company_back === 1 && el.company_front === 0
                  ? "Back-End"
                  : "null"}
              </h4>

              <h4>{el.company_remote === 1 ? "Remote" : "On the spot"}</h4>
            </div>
            <h2 className="jobContent__heading__title">{el.company_name}</h2>
            <h3
              className={
                "jobContent__heading__location " +
                (theme
                  ? "jobContent__heading__location--light"
                  : "jobContent__heading__location--dark")
              }
            >
              {el.city_name}
            </h3>
            <h3
              className={
                "jobContent__heading__address " +
                (theme
                  ? "jobContent__heading__location-light"
                  : "jobContent__heading__location--dark")
              }
            >
              {el.company_adress}
            </h3>
            <h3
              className={
                "jobContent__heading__contact " +
                (theme
                  ? "jobContent__heading__contact-light"
                  : "jobContent__heading__contact--dark")
              }
            >
              {el.company_contact}
            </h3>
          </div>

          <ExternalLink
            href={el.company_website}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="jobContent__btn">Company Website</button>
          </ExternalLink>
        </div>

        <div className="jobContent__separator"></div>

        <div className="jobContent__main">
          <section className="jobContent__main__description">
            <h3
              className={
                "jobContent__main__title " +
                (theme
                  ? "jobContent__main__title--light"
                  : "jobContent__main__title--dark")
              }
            >
              Description
            </h3>
            <p>{el.company_description}</p>
          </section>
        </div>
      </article>
    ))
  );
};

export default JobContent;
