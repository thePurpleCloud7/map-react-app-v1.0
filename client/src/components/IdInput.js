function IdInput ({children}) {
    return (
 
     <div
             style={{
                // position: "relative",
                //  height: "1vh",
                // marginLeft: "3rem"

             }}
         >
           <form>
            <label htmlFor="userid">Research ID: </label>
            <input type="text" id="userid" name="userid"/> 
           </form>
         </div>
    
    );
 }
 
 export default IdInput;