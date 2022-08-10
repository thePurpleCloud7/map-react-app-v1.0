import "./index.css";
import React from "react";
import Label from "./components/Label"
import IdInput from "./components/IdInput"
import MEurope from "./components/MEurope";
import MKorea from "./components/MKorea";
import AChina from "./components/AChina";
import MChina from "./components/MChina";
import AEurope from "./components/AEurope";
import AKorea from "./components/AKorea";
import AJapan from "./components/AJapan";
import AAfrica from "./components/AAfrica";
import MAfrica from "./components/MAfrica";
import AIndia from "./components/AIndia";
import MIndia from "./components/MIndia";
import ACentralAsia from "./components/ACentralAsia";
import MCentralAsia from "./components/MCentralAsia";
import ANorthAsia from "./components/ANorthAsia";
import MNorthAsia from "./components/MNorthAsia";
import MSEAsia from "./components/MSEAsia";
import ASEAsia from "./components/ASEAsia";
import MMiddleEast from "./components/MMiddleEast";
import MJapan from "./components/MJapan";
import AMiddleEast from "./components/AMiddleEast";
import ModernBG from "./components/ModernBG";
import AncientBG from "./components/AncientBG";
import { config } from './constants'; 
const URL = config.url;

const { useState } = require("react");

export default function App() {
    const PORT = process.env.PORT || 3002;
    const [selectedCountry, setSelectedCountry] = useState("");
    const [hoveredCountry, setHoveredCountry] = useState("");
    // function handleClick() {
    //     fetch(`${URL}/click`);
    
    //    }
    
       function handleClick(name, type) {
           const test = {test:1};
           console.log(name);
        fetch(`${URL}/click`,{method:"POST", headers: {
            "Content-Type": "application/json", }, body:JSON.stringify({
                // test:1,
                country: `${type} ${name}`
            }) });
       }
   
       function handleHover(name, type) {
        const test = {test:1};
        console.log(name);
     fetch(`${URL}/hover`,{method:"POST", headers: {
         "Content-Type": "application/json", }, body:JSON.stringify({
             country: `${type} ${name}`
         }) });
    }

    const modernCountries = [
        
        { name: "Europe", key:1, Component: MEurope, x: 47, y: 17},
        { name: "China", key:2, Component: MChina, x: 330, y: 200 },
        { name: "North Asia", key:3, Component: MNorthAsia, x: 195, y: 15 },
        { name: "Korea", key:4, Component: MKorea, x: 491, y: 255 },
        { name: "Africa", key:5, Component: MAfrica, x: 25, y: 284 },
        { name: "Southeast Asia", key:6, Component: MSEAsia, x: 390, y: 310 },
        { name: "India", key:1, Component: MIndia, x: 310, y: 280 },
        { name: "Middle East", Component: MMiddleEast, x: 185, y: 250 },
        { name: "Japan", Component: MJapan, x: 515, y: 250 },
        { name: "Central Asia", Component: MCentralAsia, x: 260, y: 200 },
      

       
    ];

    const ancientCountries = [
        { name: "Europe", Component: AEurope, x: 10, y: -60 },
        { name: "Africa", Component: AAfrica, x: -20, y: 180 },
        { name: "China", Component: AChina, x: 257, y: 20 },
        { name: "Korea", Component: AKorea, x: 525, y: 68 },
        { name: "Southeast Asia", Component: ASEAsia, x: 203, y: 315 },
        { name: "India", Component: AIndia, x: 120, y: 165},
        { name: "Middle East", Component: AMiddleEast, x: 104, y: 155 },
        { name: "Japan", Component: AJapan, x: 570, y: 318 },
        { name: "Central Asia", Component: ACentralAsia, x: 125, y: 53 },
        { name: "North Asia", Component: ANorthAsia, x: 290, y: 18 },

        
    ];


    return (
        <>
            <IdInput></IdInput>
            <ModernBG  keys={modernCountries.id}>
                {modernCountries.map(({ Component, x, y, name }) => {
                    return (
                        <Component key={Component.toString()}
                            x={x}
                            y={y}
                            country={name}
                            selectedCountry={selectedCountry}
                            hoveredCountry={hoveredCountry}
                            onClick={() => {
                                console.log(`Clicked: Modern ${name}`);
                                setSelectedCountry(name);
                                // handleClick(name);
                                handleClick(name, "Modern");
                            }}
                            onMouseEnter={() => {
                                console.log(`Hovered: Modern ${name}`);
                                setHoveredCountry(name);
                                handleHover(name, "Modern");
                            }}
                            onMouseExit={() => setHoveredCountry("")}
                        />
                    );
                })}
            </ModernBG>

            <AncientBG keys={ancientCountries.id}>
                {ancientCountries.map(({ Component, x, y, name }) => {
                    return (
                        <Component key={Component.toString()}
                            x={x}
                            y={y}
                            country={name}
                            selectedCountry={selectedCountry}
                            hoveredCountry={hoveredCountry}
                            onClick={() =>{
                                console.log(`Clicked: Ancient ${name}`);
                                setSelectedCountry(name);
                                handleClick(name, "Ancient");
                            }
                                
                            }
                            onMouseEnter={() => {
                                console.log(`Hovered: Ancient ${name}`);
                                setHoveredCountry(name);
                                handleHover(name, "Ancient");
                            }}
                            onMouseExit={() => setHoveredCountry("")}
                        />
                    );
                })}
            </AncientBG>
            <Label>{selectedCountry}</Label>
       </>
    );
}
