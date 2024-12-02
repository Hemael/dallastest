import { useNavigate } from "react-router-dom"; // Import pour navigation
import "../../styles/ficheCSS/home_physique.css";
import psysi from "../../data/SVG/physique.svg";
import psychoData from "../../data/fiche/psychoData.json";

function HomePhysique() {
    const physique = psychoData.physique;
    const navigate = useNavigate(); // Hook pour gérer la navigation

    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>

            <div className="pageContent">
                <img src={psysi} alt="image-psysi" className="psychoR" />
                <h2>Page Physique</h2>

                <div className="physique-container">
                    <section className="physique-section">
                        <h3>Apparence</h3>
                        <p>{physique.apparence.description}</p>
                        <p>
                            <strong>Taille :</strong> {physique.apparence.taille}, 
                            <strong> Poids :</strong> {physique.apparence.poids}.
                        </p>
                        <p>
                            <strong>Tatouage :</strong> {physique.apparence.tatouage}
                        </p>
                    </section>

                    <section className="physique-section">
                        <h3>Capacités physiques</h3>
                        <p>{physique.capacitesPhysiques.agilite}</p>
                        <p>{physique.capacitesPhysiques.limitation}</p>
                    </section>

                    <section className="physique-section">
                        <h3>Points faibles</h3>
                        <p>{physique.pointsFaibles}</p>
                    </section>
                </div>

                {/* Bouton Retour */}
                <button className="back-button" onClick={() => navigate(-1)}>
                    Retour
                </button>
            </div>
        </>
    );
}

export default HomePhysique;
