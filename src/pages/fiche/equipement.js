import { useNavigate } from "react-router-dom"; // Import pour navigation
import "../../styles/ficheCSS/home_equipement.css";
import equip from "../../data/SVG/equipement.svg";
import psychoData from "../../data/fiche/psychoData.json";





function HomeEquipement() {
    const equipement = psychoData.equipement;
    const navigate = useNavigate(); // Hook pour gérer la navigation


    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>

            <div className="pageContent">
                <img src={equip} alt="image-psycho" className="psychoR" />
                <h2>Page Equipement</h2>

                <div className="equipement-container">
                    
                    <section className="equipement-section">
                        <h3>Armes</h3>
                        <ul>
                            {equipement.armes.map((arme, index) => (
                                <li key={index}>{arme}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="equipement-section">
                        <h3>Gadgets</h3>
                        <ul>
                            {equipement.gadgets.map((gadget, index) => (
                                <li key={index}>{gadget}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="equipement-section">
                        <h3>Améliorations cybernétiques</h3>
                        <p>{equipement.ameliorationsCybernetiques.description}</p>
                        <p>{equipement.ameliorationsCybernetiques.limitation}</p>
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

export default HomeEquipement;



