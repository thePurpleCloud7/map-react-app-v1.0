import aBackground from "../imgs/UAncientBackgroundTwo.png";

function AncientBG ({children}) {
   return (

    <div
            style={{
                position: "relative",
                minHeight: "75vh",
                width:'710px',
                backgroundImage: `url(${aBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display:"inline-block"
            }}
        >
            {children}
        </div>
   
   );
}

export default AncientBG;