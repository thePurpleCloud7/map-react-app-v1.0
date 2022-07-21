import mBackground from "../imgs/UModernBackgroundT.png";

function ModernBG({ children }) {
    return (
        <div
            style={{
                position: "relative",
                minHeight: "50vh",

                backgroundImage: `url(${mBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {children}
        </div>
    );
}

export default ModernBG;
