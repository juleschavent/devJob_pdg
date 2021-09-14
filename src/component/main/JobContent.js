import "../../sass/sass_component/_jobContent.scss";

import { ExternalLink } from "react-external-link";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";



const JobContent = () => {

    const { theme } = useContext(ThemeContext);

    return ( 
        <article className="jobContent">

            <div className="jobContent__duties">

                <h2>Technos :</h2>

                <div className="jobContent__duties__technos">
                    
                    <div className="jobContent__duties__technos__used">
                    </div>
                    <div className="jobContent__duties__technos__used">
                    </div>
                    <div className="jobContent__duties__technos__used">
                    </div>
                    <div className="jobContent__duties__technos__used">
                    </div>

                </div>

                <h2>Tools:</h2>

                <div className="jobContent__duties__tools">
                    <div className="jobContent__duties__tools__used">
                    </div>
                    <div className="jobContent__duties__tools__used">
                    </div>
                </div>                
                
            </div>

            <div className="jobContent__separator"></div>

            <div className="jobContent__heading--desktop">
                <div className="jobContent__heading">
                    <div className="jobContent__heading__header">
                        <h4>Publié / mis à jour le: </h4>
                        <h4>Front-end</h4>
                    </div>
                    <h2 className="jobContent__heading__title">Company name</h2>
                    <h3 className="jobContent__heading__location">City</h3>
                    <h3 className="jobContent__heading__address">5 rue du Clos 1207 Genève – Suisse</h3>
                </div> 

                <button className="jobContent__btn">
                Company website
                </button>

            </div>

            <div className="jobContent__separator"></div>
                
            <div className="jobContent__main">
                <section className="jobContent__main__description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                </section>

            </div>

        </article>

     );
}
 
export default JobContent;
