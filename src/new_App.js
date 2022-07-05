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

    const modernCountries = [
        { country: "europe", Component: MEurope, x: 0, y: 0 },
        { country: "china", Component: MChina, x: 100, y: 100 },
    ];

    const ancientCountries = [
        { country: "europe", Component: AEurope, x: 300, y: 300 },
        { country: "china", Component: AChina, x: 500, y: 500 },
    ];

    return;
    <>
        <ModernBG>
            {modernCountries.map((Component, country) => {
                return <Component country={country} />;
            })}
        </ModernBG>
        <AncinetBG>
            {ancientCountries.map((country) => {
                return something;
            })}
        </AncinetBG>
    </>;
}
