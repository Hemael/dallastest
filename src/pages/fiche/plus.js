
import { useNavigate } from "react-router-dom"; // Import pour navigation

import "../../styles/ficheCSS/home_plus.css";
import plus from "../../data/SVG/plus.svg";
import psychoData from "../../data/fiche/psychoData.json";




function HomePlus() {
    const supplementaire = psychoData.supplementaire;
    const navigate = useNavigate(); // Hook pour gérer la navigation
    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>

            <div className="pageContent">
                <img src={plus} alt="image-psycho" className="psychoR" />
                <h2>Page Plus</h2>

                <div className="plus-container">
                    <section className="plus-section">
                        <h3>Histoire personnelle</h3>
                        <p>{supplementaire.histoirePersonnelle}</p>
                    </section>

                    <section className="plus-section">
                        <h3>Forces principales</h3>
                        <ul>
                            {supplementaire.forcesPrincipales.map((force, index) => (
                                <li key={index}>{force}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="plus-section">
                        <h3>Récapitulatif des forces et faiblesses</h3>
                        <h4>Forces</h4>
                        <ul>
                            {supplementaire.recapitulatifForcesEtFaiblesses.forces.map((force, index) => (
                                <li key={index}>{force}</li>
                            ))}
                        </ul>
                        <h4>Faiblesses</h4>
                        <ul>
                            {supplementaire.recapitulatifForcesEtFaiblesses.faiblesses.map((faiblesse, index) => (
                                <li key={index}>{faiblesse}</li>
                            ))}
                        </ul>
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

export default HomePlus;

