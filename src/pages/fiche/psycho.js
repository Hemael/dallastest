import { useNavigate } from "react-router-dom"; // Import pour navigation
import "../../styles/ficheCSS/home_psycho.css";
import psychol from "../../data/SVG/psycho.svg";
import psychoData from "../../data/fiche/psychoData.json";
import henelPsy from "../../data/SVG/HenelCo.svg"

function HomePsycho() {
    const psychologie = psychoData.psychologie; // Utilisation correcte de l'import
    const navigate = useNavigate(); // Hook pour gérer la navigation


    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>

            <div className="pageContent">

                <img src={psychol} alt="image-psycho" className="psychoR" />
                <h2>Page Psychologie</h2>

                <div className="psycho-container">
                    
                    <div className="containerImgPsy">
                    <img src={henelPsy} alt="image-psycho" className="henelPsy" />
                    </div>

                    <div className="containerTextPsy">

                        <section className="psycho-section">
                            <h3>Caractère</h3>
                            <p>{psychologie.caractere}</p>
                        </section>

                        <section className="psycho-section">
                            <h3>Faiblesses mentales</h3>
                            <p>{psychologie.faiblessesMentales}</p>
                        </section>

                        <section className="psycho-section">
                            <h3>Santé mentale</h3>
                            <p>{psychologie.santeMentale}</p>
                        </section>

                        <section className="psycho-section">
                            <h3>Orientation sexuelle</h3>
                            <p>{psychologie.orientationSexuelle}</p>
                        </section>

                        <section className="psycho-section">
                            <h3>Loisirs et goûts personnels</h3>
                            <ul>
                                {psychologie.loisirsEtGouts.map((gout, index) => (
                                    <li key={index}>{gout}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                
                </div>

                                {/* Bouton Retour */}
                                <button className="back-button" onClick={() => navigate(-1)}>
                    Retour
                </button>

            </div>
            
        </>
    );
}

export default HomePsycho;
