import "./index.css";
import MEurope from "./components/MEurope";
import AChina from "./components/AChina";
import MChina from "./components/MChina";
import AEurope from "./components/AEurope";
import ModernBG from "./components/ModernBG";
import AncientBG from "./components/AncientBG";
const { useState } = require("react");



export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [hoveredCountry, setHoveredCountry] = useState("");

    const modernCountries = [
        { name: "europe", Component: MEurope, x: 0, y: 0 },
        { name: "china", Component: MChina, x: 100, y: 100 },
    ];

    const ancientCountries = [
        { name: "europe", Component: AEurope, x: 300, y: 300 },
        { name: "china", Component: AChina, x: 500, y: 500 },
    ];

    // const countries = [
    //     { name: "europe", pieces: [AEurope, MEurope] },
    //     { name: "china", pieces: [AChina, MChina] },
    // ];

    const style = {
        container: {
            position: "relative",
            width: "100vw",
            height: "100vh",
        },

    };

    return (
        <div style={style.container}>
         
          { modernCountries.map((Country, x,y, name) => {
    
                return (
                        <Country
                            x={x}
                            y={y}
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
                );}
                 )}
                        
        
          
          <AncientBG>
            
          </AncientBG>
        </div>
    );
}