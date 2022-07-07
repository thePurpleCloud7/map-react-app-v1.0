import mBackground from "../imgs/UModernBackgroundT.png";

function ModernBG () {
   return (

    <img src={mBackground} width="50%" style={{ display:"inline-block",  position: "relative", zIndex:1}} />

    // {/* // <div  style={{ display:"inline-block",  position: "relative", width:"50%", minHeight:"50%",
    // backgroundImage: "url(" + mBackground + ")",
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "center",
    //         backgroundSize: "cover" }}> </div> */}

   
   );
}

export default ModernBG;