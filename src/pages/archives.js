import { useState } from "react";
import "../styles/archives.css";
import HenelCo from "../data/SVG/HenelCo.svg";
import disc from "../data/SVG/disc.svg";
import boxesData from "../data/boxesData.json";


function Archives() {
    const [activeBox, setActiveBox] = useState(null);

    const toggleTextVisibility = (boxId) => {
        setActiveBox(activeBox === boxId ? null : boxId);
    };

    return (
        <>
            <div className="background">
                <div className="background-image"></div>
            </div>

            <div className="center-container">
                <img src={HenelCo} alt="image-connexion" className="henel" />
            </div>

            <div className="home">
                {boxesData.map((box) => (
                    <div className="boiteHome" key={box.id}>
                        <div className="boite" onClick={() => toggleTextVisibility(box.id)}>
                            <h2>{box.title}</h2>
                            <img src={disc} alt="image-connexion" className="disc" />
                        </div>
                        {activeBox === box.id && (
                            <p className="textBoite">{box.text}</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Archives;
