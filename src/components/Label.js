function Label ({children}) {
    return (
 
     <div
             style={{
                 position: "relative",
                 height: "5vh",
                marginLeft: "3rem"

             }}
         >
           <h2>{children}</h2> 
         </div>
    
    );
 }
 
 export default Label;