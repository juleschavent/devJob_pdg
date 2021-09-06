import "../../sass/sass_component/_jobList.scss"
// import "../../sass/sass_component/_jobList--dark.scss"
import { Link } from 'react-router-dom'
import LoadMore from "./LoadMore";
import { useEffect, useState } from "react";
import axios from "axios";
import NoLogo from "../../assets/noLogo.png"
import MyDate from "../../assets/MyDate"


const JobList = () => {

    // Creation de 2 hook useState pour venir stocker les données qu'on récupère de la BDD
    // companyList récupère un SELECT * de company
    const [companyList, setCompanyList] = useState(null)
    // technoList récupère un SELECT * de company avec INNER JOIN de technology
    const [technoList, setTechnoList] = useState(null)

    // useEffect est un autre hook, il sert (entre autre) à effectuer des actions au chargement du composant
    // Ici il execute des req sur les endpoints créés côté back
    useEffect(() => {
        // Get la liste des entreprises, req principale
        // Une fois la req effectué (.then), renvoie en réponse les data (reponse)
        axios.get("http://localhost:3001/companyList").then((response) => {
            console.log(response);
            setCompanyList(response.data);
        });

        //get la liste des technos par entreprise, sert à boucler dans la boucle principale pour afficher chaque techno d'une entreprise
        axios.get("http://localhost:3001/techno").then((response) => {
            console.log(response);
            setTechnoList(response.data);
        });

    }, [])

    return (
        // <> et </> sont des fragments react, utilisé pour gérer notre code HTML, une fois chargé sur les navigateurs ils ne sont plus visible
        <>
            <main>
                {/* Boucle sur companyList pour afficher chaque éléments du tableau */}
                {companyList && companyList.map((el, id) => (
                    // Link redirige vers la page JobDetails correspondant à l'annonce
                    // On lui passe des props via l'url qu'on récupère du côté jobDetails avec le hook useParams
                    // Voir l'utilisation des hook en react (TRES IMPORTANT)
                    <Link to={`/jobdetails/${el.company_id}`} key={id} style={{ textDecoration: "none" }}>
                        <div className="card">
                            {/* Utilise l'api clearbit pour récup logo, si pas de logo alors affiche un placeholder */}
                            <img src={"https://logo.clearbit.com/" + el.company_logo}
                                onError={(e) => { e.target.src = NoLogo }}
                                alt={"logo de " + el.company_name}
                                className="card__logo" />
                            <h2 className="card__companyName">{el.company_name}</h2>
                            {/* Import du compo MyDate (comme Import) pour calculer si la date de création est inférieure à 30j */}
                            {/* Si non alors n'affiche rien (fonction ternaire) */}
                            {MyDate() - parseInt(el.company_postedat) < 30 ?
                                <p className="card__isNew">New</p> : ""}
                            {/* Ternaire => si égale à 1 alors afficher "Remote" Sinon afficher "no remote" */}
                            <p className="card__isRemote">{el.company_remote === 1 ? "Remote" : "No remote work"}</p>
                            <div className="card__technoList">
                                {/* Seconde boucle qui sert à afficher chaque techno par entreprise */}
                                {technoList && technoList.map((techno, idTechno) => (
                                    // Si l'id de la company est égale à l'id de la table relationnelle avec techno alors
                                    el.company_id === techno.company_id ?
                                        <p key={idTechno} className="card__technoList__techno">{techno.technology_name}</p>
                                        // Sinon rien (toujours du ternaire)
                                        : ""
                                ))}
                            </div>
                            <p className="card__city">{el.city_name}</p>
                        </div>
                    </Link>
                ))}
            </main>
            <LoadMore />
        </>
    );
}

export default JobList;