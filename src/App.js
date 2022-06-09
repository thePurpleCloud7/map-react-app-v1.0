import "./index.css";
import MEurope from "./components/MEurope";
import AEurope from "./components/AEurope";
import Country from "./components/Country";
// const AEurope = require("./components/AEurope");
// const MEurope = require("./components/MEurope");
const{ useState } = require("react");



export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [hoveredCountry, setHoveredCountry] = useState("");
  
    const countries = [
      { name: "europe", pieces: [AEurope, MEurope] }
    //   { name: "europe", pieces: [Piece, Piece, Piece] },
    //   { name: "northamerica", pieces: [Piece, Piece, Piece] }
    ];
  
    console.log(selectedCountry);
  
    return countries.map((country) => {
      const { name, pieces } = country;
    //   return pieces.map((piece) => {
        return (
            // {piece}
        //  <div>
        //      <Country
            
        //     country={name}
        //     selectedCountry={selectedCountry}
        //     onClick={() => setSelectedCountry(name)}
        //     hoveredCountry={hoveredCountry}
        //     onMouseEnter={() => setHoveredCountry(name)}
        //     onMouseExit={() => setHoveredCountry("")}

        //     />

        //  </div>

         

          <div >
        <span id="meurope">
        <MEurope 
            country={name}
            selectedCountry={selectedCountry}
            hoveredCountry={hoveredCountry}
            onClick={() => setSelectedCountry(name)}
            onMouseEnter={() => setHoveredCountry(name)}
            onMouseExit={() => setHoveredCountry("")}
          />
        </span>
         
            <AEurope id="aeurope"
            //Positioning props? 
            country={name}
            selectedCountry={selectedCountry}
            hoveredCountry={hoveredCountry}
            onClick={() => setSelectedCountry(name)}
            onMouseEnter={() => setHoveredCountry(name)}
            onMouseExit={() => setHoveredCountry("")}
          />

          </div>
        );
      });
    // });
  }
