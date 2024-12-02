import { Link } from "react-router-dom"; // Import du composant Link
import "../styles/home.css";
import HenelCo from "../data/SVG/HenelCo.svg";
import Equipement from "../data/SVG/equipement.svg";
import Identite from "../data/SVG/identite.svg";
import Physique from "../data/SVG/physique.svg";
import Plus from "../data/SVG/plus.svg";
import Psycho from "../data/SVG/psycho.svg";
import Verrou from "../data/SVG/verrou.svg";

function Home() {
    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>
            <div className="center-carrer">
                <div className="carrer"></div>
            </div>

            <div className="center">
                <div className="center-container">
                    <img src={HenelCo} alt="image-connexion" className="henelh" />
                </div>

                <div className="menu">
                    {/* Liens pour chaque image */}
                    <Link to="/home/identite" className="idPict">
                        <img src={Identite} alt="image-picto" className="picto" />
                    </Link>
                    <Link to="/home/psychologique" className="psychoPict">
                        <img src={Psycho} alt="image-picto" className="picto" />
                    </Link>
                    <Link to="/home/apparence" className="physPict">
                        <img src={Physique} alt="image-picto" className="picto" />
                    </Link>
                    <Link to="/home/equipements" className="equiPict">
                        <img src={Equipement} alt="image-picto" className="picto" />
                    </Link>
                    <Link to="/home/autres" className="plusPict">
                        <img src={Plus} alt="image-picto" className="picto" />
                    </Link>
                </div>
            </div>

            {/* Verrou redirige vers la page d'accueil */}
            <Link to="/">
                <img src={Verrou} alt="image-picto" className="verrou" />
            </Link>
        </>
    );
}

export default Home;
