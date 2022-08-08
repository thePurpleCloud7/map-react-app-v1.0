import "./index.css";
import React from "react";
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

const { useState } = require("react");

export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [hoveredCountry, setHoveredCountry] = useState("");

    const modernCountries = [
        
        { name: "europe", key:1, Component: MEurope, x: 47, y: 17},
        { name: "china", key:2, Component: MChina, x: 330, y: 200 },
        { name: "northasia", key:3, Component: MNorthAsia, x: 195, y: 15 },
        { name: "korea", key:4, Component: MKorea, x: 491, y: 255 },
        { name: "africa", key:5, Component: MAfrica, x: 25, y: 284 },
        { name: "seasia", key:6, Component: MSEAsia, x: 390, y: 310 },
        { name: "india", key:1, Component: MIndia, x: 310, y: 280 },
        { name: "middleeast", Component: MMiddleEast, x: 185, y: 250 },
        { name: "japan", Component: MJapan, x: 515, y: 250 },
        { name: "centralasia", Component: MCentralAsia, x: 260, y: 200 },
      

       
    ];

    const ancientCountries = [
        { name: "europe", Component: AEurope, x: 10, y: -60 },
        { name: "africa", Component: AAfrica, x: -20, y: 180 },
        { name: "china", Component: AChina, x: 257, y: 20 },
        { name: "korea", Component: AKorea, x: 525, y: 68 },
        { name: "seasia", Component: ASEAsia, x: 203, y: 315 },
        { name: "india", Component: AIndia, x: 120, y: 165},
        { name: "middleeast", Component: AMiddleEast, x: 104, y: 155 },
        { name: "japan", Component: AJapan, x: 570, y: 318 },
        { name: "centralasia", Component: ACentralAsia, x: 125, y: 53 },
        { name: "northasia", Component: ANorthAsia, x: 290, y: 18 },

        
    ];


    return (
        <>
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
                                setSelectedCountry(name)}}
                            onMouseEnter={() => {
                                console.log(`Hovered: Modern ${name}`);
                                setHoveredCountry(name);
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
                                setSelectedCountry(name)}}
                            onMouseEnter={() => {
                                console.log(`Hovered: Ancient ${name}`);
                                setHoveredCountry(name);
                            }}
                            onMouseExit={() => setHoveredCountry("")}
                        />
                    );
                })}
            </AncientBG>
       </>
    );
}
