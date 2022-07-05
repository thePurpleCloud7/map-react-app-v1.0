import "./index.css";
import MEurope from "./components/MEurope";
import AChina from "./components/AChina";
import MChina from "./components/MChina";
import AEurope from "./components/AEurope";
import Country from "./components/Country";
const { useState } = require("react");

export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [hoveredCountry, setHoveredCountry] = useState("");

    const countries = [
        { name: "europe", pieces: [AEurope, MEurope] },
        { name: "china", pieces: [AChina, MChina] },
    ];

    const style = {
        container: {
            position: "relative",
            width: "100vw",
            height: "100vh",
        },
    };

    return (
        <div style={style.container}>
            {countries.map((country) => {
                const { name, pieces } = country;
                return pieces.map((Piece) => {
                    return (
                        <Piece
                            x={500}
                            y={100}
                            country={name}
                            selectedCountry={selectedCountry}
                            hoveredCountry={hoveredCountry}
                            onClick={() => setSelectedCountry(name)}
                            onMouseEnter={() => {
                                console.log("ENTER");
                                setHoveredCountry(name);
                            }}
                            onMouseExit={() => setHoveredCountry("")}
                        />
                    );
                });
            })}
        </div>
    );
}
