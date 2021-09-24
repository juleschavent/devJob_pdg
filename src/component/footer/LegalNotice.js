// import { useTheme } from '@material-ui/styles';
// import { useContext } from 'react';
import '../../sass/sass_component/_legalNotice.scss'
// import { ThemeContext } from '../context/ThemeContext';




const LegalNotice = () => {
    // const { theme } = useContext(ThemeContext);

    return (

        <article className="legalNot">
            <h1>Mentions légales</h1>

            <div className="legalNot__separator"></div>

            <section className="legalNot__summary">
            <h2>Sommaire</h2>
                <ul>
                    <li>Coordonnées de l'association</li>
                    <li>Informations sur notre hebergeur</li>
                    <li>RGPD
                        <ul>
                            <li>Gestion des données personnelles et politique de confidentialité</li>
                            <li>Droit applicable et attribution de juridiction</li>
                            <li>Les principales lois concernées</li>
                            <li>Lexique</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <div className="legalNot__separator"></div>

            <section className="legalNot__contact">
                <h2>Coordonnées de Devjob</h2>
    
                    <h3>Fournisseur du site web: </h3>
                    <p><span>Association Devjob</span>, 15 Avenue Emile Zola, 74000 Annemasse</p> 
                    <p><span>Directors: </span>Jules Chavent, Loris Severino, Melanie Evanno</p>
                    <p><span>Nous contacter: </span>contact@devjob.com</p>
            </section>
                
            <div className="legalNot__separator"></div>

            <section className="legalNot__info">
                <h2>Informations sur notre hebergeur, O2switch</h2>
                    <p><span>Siret </span>510 909 807 00024</p>
                    <p><span>RCS</span> Clermont Ferrand</p>
                    <p><span>SARL</span> au capital de 100 000€</p>
                    <p><span>Opérateur Télécom déclaré</span> ARCEP09/2989 - AS50474</p>
                    <p><span>o2switch</span> est une société du groupe Zohey SAS au capital de 8 000 000€</p>
            </section>

            <div className="legalNot__separator"></div>

            <section className="legalNot__rgpd">
                <h2>Politique de confidentialité Devjob</h2>
                <h3>Gestion des données personnelles et politique de confidentialité</h3>
                    <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. A l’occasion de l’utilisation du site www.devjob.com, peuvent être recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site www.devjob.com, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur. En tout état de cause l'association devjob ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site www.devjob.com. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site www.devjob.com l’obligation ou non de fournir ces informations. Le site n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles.
                    </p>

                <h3>Droit applicable et attribution de juridiction</h3>
                    <p>
                    Tout litige en relation avec l’utilisation du site www.devjob.com est soumis au droit français. <br />
                    Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                    </p>
            
                <h3>Les principales lois concernées</h3>
                    <p>
                    Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004
                    relative à l’informatique, aux fichiers et aux libertés. <br />
                    Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
                    </p>

                <h3>Lexique</h3>
                    <p><span>Utilisateur: </span>Internaute se connectant, utilisant le site susnommé.</p>
                    <p><span>Informations personnelles: </span> « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
                    </p>


            </section>
            

        </article>
    );
}

export default LegalNotice;