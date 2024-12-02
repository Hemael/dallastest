import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgco from "../data/SVG/imgco.svg";
import "../styles/connexion.css";
import "../styles/principal.css";
import "../styles/utilitaireCSS/animation.css";
import "../styles/utilitaireCSS/typo.css";
import AudioPlayer from "../components/audioPlayer.js"; // Import du composant AudioPlayer

function Connexion() {
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const correctPin = "676999";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin === correctPin) {
            setError("");
            navigate("/home");
        } else {
            setError("PIN incorrect. Veuillez réessayer.");
        }
    };

    return (
        <div className="bobo">
            <div className="background">
                <div className="background-image"></div>
            </div>
            <div className="enTete">
                <img src={imgco} alt="image-connexion" />
                <h1>CONNEXION</h1>
                <form onSubmit={handleSubmit} style={{ margin: "0", padding: "0" }}>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="CODE VERIFICATION"
                        className="pinInput"
                    />
                    <button type="submit" className="connexionButton">
                        Valider
                    </button>
                </form>
                <div style={{ height: error ? "auto" : "0px", overflow: "hidden" }}>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
            <AudioPlayer /> {/* Ajout du lecteur audio */}
        </div>
    );
}

export default Connexion;
