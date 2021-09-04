import '../../sass/sass_component/_footer.scss';
import Image from '../../assets/Import'

const Footer = () => {

    return (
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur dicta commodi, corporis ipsa pariatur sunt officia. Quasi eius animi asperiores rem magni iure atque doloribus minima, minus neque non.</p>
            <img src={Image('fokus.png', 'logo/')} alt="" />
        </div>
    );
}

export default Footer;