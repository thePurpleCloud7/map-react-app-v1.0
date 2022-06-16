import "./index.css";
import MEurope from "./components/MEurope";
import AChina from "./components/AChina";
import MChina from "./components/MChina";
import AEurope from "./components/AEurope";
import Country from "./components/Country";
const{ useState } = require("react");



export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [hoveredCountry, setHoveredCountry] = useState("");
  
    const countries = [
      { name: "europe", pieces: [AEurope, MEurope] },
      { name: "china", pieces: [AChina, MChina] }
    //   { name: "europe", pieces: [Piece, Piece, Piece] },
    //   { name: "northamerica", pieces: [Piece, Piece, Piece] }
    ];
  
    console.log(selectedCountry);
  
    return countries.map((country) => {
      const { name, pieces } = country;
      return pieces.map((piece) => {
        return (
     <div>
        <div id="modern">
        <MEurope 
            x={500}
            y={100}
            country={name}
            selectedCountry={selectedCountry}
            hoveredCountry={hoveredCountry}
            onClick={() => setSelectedCountry(name)}
            onMouseEnter={() => setHoveredCountry(name)}
            onMouseExit={() => setHoveredCountry("")}
          />
          <MChina
            x={500}
            y={100}
            country={name}
            selectedCountry={selectedCountry}
            hoveredCountry={hoveredCountry}
            onClick={() => setSelectedCountry(name)}
            onMouseEnter={() => setHoveredCountry(name)}
            onMouseExit={() => setHoveredCountry("")}
          />
        </div>
         <div id="ancient">
            <AEurope id="aeurope"
            x={100}
            y={500}
            country={name}
            selectedCountry={selectedCountry}
            hoveredCountry={hoveredCountry}
            onClick={() => setSelectedCountry(name)}
            onMouseEnter={() => setHoveredCountry(name)}
            onMouseExit={() => setHoveredCountry("")}
          />
           <AChina id="achina"
            x={100}
            y={500}
            country={name}
            selectedCountry={selectedCountry}
            hoveredCountry={hoveredCountry}
            onClick={() => setSelectedCountry(name)}
            onMouseEnter={() => setHoveredCountry(name)}
            onMouseExit={() => setHoveredCountry("")}
          />

          </div>

          </div>
        );
      });
    });
  }
