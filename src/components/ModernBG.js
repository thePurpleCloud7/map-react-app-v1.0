import mBackground from "../imgs/UModernBackgroundT.png";

function ModernBG({ children }) {
    return (
        <div
            style={{
                position: "relative",
                minHeight: "75vh",
                width:'700px',
                backgroundImage: `url(${mBackground})`,
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

export default ModernBG;
