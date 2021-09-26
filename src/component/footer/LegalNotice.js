// import { useContext } from 'react';
import '../../sass/sass_component/_legalNotice.scss';
import { ThemeContext } from '../context/ThemeContext';
import arrowUp from './../../assets/logo/up.svg';

import { Link } from 'react-scroll';
import { useState, useContext } from 'react';

const LegalNotice = () => {
    const { theme } = useContext(ThemeContext);


    // Eléments pour scroll back to top
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    window.addEventListener('scroll', toggleVisible)

    return (

    <article className={"legalNot " + (theme ? "legalNot--light" : "legalNot--dark")}>
            <h1>Mentions légales</h1>

            <div className="legalNot__separator"></div>

            <section className="legalNot__summary">
            <h2>Sommaire</h2>
                <ul>
                    <li><Link className="summary__link"
                     activeClass="active" to="contact" spy={true} smooth={true} offset={-24} >Coordonnées de l'association</Link></li>
                    <li><Link to="info" spy={true} smooth={true} offset={-48}>Informations sur notre hebergeur</Link></li>
                    <li><Link to="rgpd" spy={true} smooth={true} offset={-24}>RGPD</Link> 
                        <ul>
                            <li><Link to="persoData" spy={true} smooth={true} offset={-20}>Gestion des données personnelles et politique de confidentialité</Link></li>
                            <li><Link to="jurisdiction" spy={true} smooth={true}>Droit applicable et attribution de juridiction</Link></li>
                            <li><Link to="law" spy={true} smooth={true}>Les principales lois concernées</Link></li>
                            <li><Link to="lexicon" spy={true} smooth={true} >Lexique</Link></li>
                        </ul>
                    </li>
                </ul>
            </section>

            <div className="legalNot__separator"></div>

            <section className="legalNot__contact" id="contact">
                <h2>Coordonnées de Devjob</h2>
    
                    <h3>Fournisseur du site web: </h3>
                    <p><span>Association Devjob</span>, 15 Avenue Emile Zola, 74000 Annemasse</p> 
                    <p><span>Directors: </span>Jules Chavent, Loris Severino, Melanie Evanno</p>
                    <p><span>Nous contacter: </span>contact@devjob.com</p>
            </section>
                
            <div className="legalNot__separator"></div>

            <section className="legalNot__info" id="info">
                <h2>Informations sur notre hebergeur, O2switch</h2>
                    <p><span>Siret </span>510 909 807 00024</p>
                    <p><span>RCS</span> Clermont Ferrand</p>
                    <p><span>SARL</span> au capital de 100 000€</p>
                    <p><span>Opérateur Télécom déclaré</span> ARCEP09/2989 - AS50474</p>
                    <p><span>o2switch</span> est une société du groupe Zohey SAS au capital de 8 000 000€</p>
            </section>

            <div className="legalNot__separator"></div>

            <section className="legalNot__rgpd" id="rgpd">
                <h2>Politique de confidentialité Devjob</h2>
                <h3 id="persoData">Gestion des données personnelles et politique de confidentialité</h3>
                    <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. A l’occasion de l’utilisation du site www.devjob.com, peuvent être recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site www.devjob.com, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur. En tout état de cause l'association devjob ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site www.devjob.com. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site www.devjob.com l’obligation ou non de fournir ces informations. Le site n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles.
                    </p>

                <h3 id="jurisdiction">Droit applicable et attribution de juridiction</h3>
                    <p>
                    Tout litige en relation avec l’utilisation du site www.devjob.com est soumis au droit français. <br />
                    Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                    </p>
            
                <h3 id="law">Les principales lois concernées</h3>
                    <p>
                    Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004
                    relative à l’informatique, aux fichiers et aux libertés. <br />
                    Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
                    </p>

                <h3 id="lexicon">Lexique</h3>
                    <p><span>Utilisateur: </span>Internaute se connectant, utilisant le site susnommé.</p>
                    <p><span>Informations personnelles: </span> « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                    </p>

            </section>
            
            <button onClick={scrollToTop} className="box__scrollToTop" style={{display: visible ? 'inline' : 'none'}}>
                <img src={arrowUp} title="arrow up" className="scrollToTop" alt="Fleche vers le haut"  />
            </button>

        </article>
    );
}

export default LegalNotice;