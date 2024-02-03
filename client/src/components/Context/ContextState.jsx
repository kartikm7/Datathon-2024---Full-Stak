import React, {useState} from "react";
import talentTrailContext from "./context";


function ContextState(props){
    const [userState, setUserState] = useState(false);
    
    return(
        <talentTrailContext.Provider value={{userState, setUserState ,}}>
            {props.children}
        </talentTrailContext.Provider>
    )
}

export default ContextState