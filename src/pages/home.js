import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Import du CSS
import HenelCo from "../data/SVG/HenelCo.svg"; // Import de l'image principale
import Equipement from "../data/SVG/equipement.svg";
import Identite from "../data/SVG/identite.svg";
import Physique from "../data/SVG/physique.svg";
import Plus from "../data/SVG/plus.svg";
import Psycho from "../data/SVG/psycho.svg";
import Verrou from "../data/SVG/verrou.svg";

function Home() {
    // Applique une classe au body pour le centrage spécifique à la page Home
    useEffect(() => {
        document.body.classList.add("center-body");
        return () => {
            document.body.classList.remove("center-body");
        };
    }, []);

    return (
        <div className="bobo">
            {/* Section arrière-plan */}
            <div className="background">
                <div className="background-image"></div>
            </div>

            {/* Carré central décoratif */}
            <div className="center-carrer">
                <div className="carrer"></div>
            </div>

            {/* Contenu central */}
            <div className="center-content">
                <div className="center-container">
                    <img src={HenelCo} alt="HenelCo Logo" className="henelh" />
                </div>

                {/* Menu avec les icônes */}
                <div className="menu">
                    <Link to="/home/identite" className="idPict">
                        <img src={Identite} alt="Identité" className="picto" />
                    </Link>
                    <Link to="/home/psychologique" className="psychoPict">
                        <img src={Psycho} alt="Psychologie" className="picto" />
                    </Link>
                    <Link to="/home/apparence" className="physPict">
                        <img src={Physique} alt="Apparence" className="picto" />
                    </Link>
                    <Link to="/home/equipements" className="equiPict">
                        <img src={Equipement} alt="Équipements" className="picto" />
                    </Link>
                    <Link to="/home/autres" className="plusPict">
                        <img src={Plus} alt="Autres" className="picto" />
                    </Link>
                </div>
            </div>

            {/* Icône verrou pour revenir à l'accueil */}
            <Link to="/" className="verrou-link">
                <img src={Verrou} alt="Verrou" className="verrou" />
            </Link>
        </div>
    );
}

export default Home;
