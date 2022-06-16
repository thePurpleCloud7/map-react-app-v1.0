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
        // <svg width = "231" height= "121" viewBox = "0 0  231 121" fill = "none"  xmlns="http://www.w3.org/2000/svg">

        //     <path onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" fill={selectedCountry === country ? "red" : "gray"} stroke={hoveredCountry === country ? "red" : "black"} 
        //     d="M49 0.5L1 120L230 114L136 73L209.5 0.5H49Z"/>
        // </svg>

        <svg xmlns="http://www.w3.org/2000/svg"
             width="650px"
            viewBox="-50 -400 2500 2000"
            // style={{ position: "absolute", left: 50, top: 10 }}
        >
  <path onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" fill={selectedCountry === country ? "red" : "gray"} stroke={hoveredCountry === country ? "red" : "black"} id="Ancient Europe"
        
        d="M 281.00,91.00
           C 294.13,93.46 316.75,110.27 317.00,125.00
             317.21,137.63 317.88,133.15 318.83,142.00
             318.83,142.00 320.00,166.00 320.00,166.00
             320.00,166.00 321.00,184.00 321.00,184.00
             321.00,184.00 318.00,207.00 318.00,207.00
             318.00,207.00 318.00,222.00 318.00,222.00
             318.00,222.00 317.00,236.00 317.00,236.00
             316.95,240.25 317.41,250.50 316.35,254.00
             314.34,260.73 311.14,260.03 311.00,270.00
             310.93,275.51 311.30,290.70 308.40,294.91
             305.37,299.32 294.26,304.72 289.00,305.88
             289.00,305.88 277.00,308.04 277.00,308.04
             268.36,310.63 266.90,315.07 260.00,316.94
             255.86,318.07 252.21,317.98 248.00,318.00
             248.00,318.00 226.00,320.00 226.00,320.00
             226.00,320.00 205.00,319.00 205.00,319.00
             205.00,319.00 177.00,322.00 177.00,322.00
             158.88,322.03 154.43,325.07 138.00,330.48
             138.00,330.48 129.00,333.09 129.00,333.09
             120.93,336.06 108.88,346.39 105.00,348.07
             98.88,350.71 79.53,349.92 72.00,350.00
             72.00,350.00 59.00,351.00 59.00,351.00
             59.00,351.00 40.00,351.00 40.00,351.00
             37.64,351.00 33.80,351.42 32.16,349.43
             29.35,346.02 29.95,330.82 30.00,326.00
             30.08,319.56 33.03,309.34 36.63,304.00
             36.63,304.00 43.59,295.00 43.59,295.00
             43.59,295.00 49.31,284.09 49.31,284.09
             49.31,284.09 55.45,275.99 55.45,275.99
             59.35,269.84 64.90,256.22 65.00,249.00
             65.04,246.07 65.39,239.60 63.98,237.21
             62.33,234.41 54.17,230.71 51.00,229.00
             51.00,229.00 35.00,221.64 35.00,221.64
             30.98,219.30 28.47,216.28 25.00,213.30
             23.62,212.11 20.57,209.86 19.61,208.54
             16.82,204.71 20.46,200.86 21.45,197.00
             22.22,193.95 21.99,188.33 22.00,185.00
             22.00,185.00 23.00,170.00 23.00,170.00
             23.00,170.00 23.83,147.00 23.83,147.00
             24.18,143.30 23.67,139.64 24.61,136.00
             24.61,136.00 32.14,118.00 32.14,118.00
             33.85,114.14 35.98,108.21 38.41,105.00
             41.14,101.41 54.89,89.15 59.00,85.58
             66.78,78.82 72.90,72.68 83.00,68.96
             87.63,67.26 101.76,66.01 107.00,66.00
             107.00,66.00 145.00,66.00 145.00,66.00
             145.00,66.00 162.00,65.00 162.00,65.00
             162.00,65.00 199.00,65.00 199.00,65.00
             210.86,65.22 208.77,73.93 218.00,72.73
             220.46,72.41 230.92,69.33 233.00,68.19
             236.26,66.39 238.09,64.17 242.00,62.85
             246.25,61.41 266.93,60.10 270.91,61.59
             270.91,61.59 277.09,65.46 277.09,65.46
             282.50,67.89 285.73,66.87 289.00,73.00
             281.26,79.01 280.34,81.70 281.00,91.00 Z" />
</svg>
        
        );
}
export default AEurope;