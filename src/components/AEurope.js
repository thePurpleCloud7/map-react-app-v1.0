 function AEurope({
    x,
    y,
    country,
    onClick,
    onMouseEnter,
    onMouseExit,
    selectedCountry,
    hoveredCountry
    // parameters/methods
}) {
 return (
        
        <svg  
            width="900px"
             xmlns="http://www.w3.org/2000/svg"  
             viewBox="-50 -400 2500 2000"
             style={{ position: "absolute", left: x, top: y }}
            >
             
        <path  
        onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" id="Ancient Europe"
        fill={selectedCountry === country ? "rgba(131,152,199,0.5)" : "rgba(0,0,0,0.25)"}
        stroke={selectedCountry === country ?  "rgb(0,92,230)": (hoveredCountry === country && selectedCountry !== country) ? "rgb(0,92,230)": "rgba(131,152,199,0.5)" }
        strokeWidth="8"
         d="M263 31c13 2 36 19 36 34 0 13 1 8 2 17l1 24 1 18-3 23v15l-1 14-1 18c-2 7-5 6-5 16 0 6 0 21-3 25s-14 10-19 11l-12 2c-9 3-10 7-17 9l-12 1-22 2-21-1-28 3c-18 0-23 3-39 8l-9 3c-8 3-20 13-24 15-6 3-25 2-33 2l-13 1H22c-2 0-6 0-8-2-3-3-2-18-2-23 0-6 3-17 7-22l7-9 5-11 6-8c4-6 10-20 10-27l-1-12c-2-3-10-6-13-8l-16-7-10-9-5-4c-3-4 0-8 1-12l1-12 1-15 1-23 1-11 7-18 6-13 21-19c8-7 14-13 24-17 5-2 19-3 24-3h38l17-1h37c12 0 10 9 19 8l15-5c3-2 5-4 9-5 4-2 25-3 29-1l6 3c6 3 9 2 12 8-8 6-9 9-8 18Z"/>
      </svg>


        
        );
}
export default AEurope;