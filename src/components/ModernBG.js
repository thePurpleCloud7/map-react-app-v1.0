import mBackground from "../imgs/UModernBackground.png";

function ModernBG () {
   return (
    <div  style={{ display:"inline-block",  position: "relative", width:"50%", minHeight:"50%",
    backgroundImage: "url(" + mBackground + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover" }}>

    </div>
   );
}

export default ModernBG;