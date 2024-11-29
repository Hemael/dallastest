import { Link } from "react-router-dom"; // Import du composant Link
import "../styles/home_identite.css";
import cartei from "../data/SVG/cartei.svg";
import carteIdHeva from "../data/SVG/carteIdHeva.svg";
import carteIdtext from "../data/SVG/carteIdtext.svg";
import carteIdBack from "../data/SVG/carteIdBack.svg";

function HomeIdentite() {
    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>

            <div className="ficheIdentite">

                {/* Identité texte en haut à gauche */}
                <div className="idBoiteText">
                <img src={carteIdtext} alt="image-carte" className="identiteText" />

                <Link to="/home">
                   <img src={carteIdBack} alt="image-carte" className="identiteBack" />
                </Link>

                </div>
                
                {/* Boîte contenant la photo et la carte à droite */}
                <div className="boitePhotoHev">
                    <img src={cartei} alt="image-carte" className="photoHev" />
                    <img src={carteIdHeva} alt="image-carte" className="identiteHev" />
                    <p className="python">Chef Pytheons - Golden</p>
                </div>
            </div>
        </>
    );
}

export default HomeIdentite;
