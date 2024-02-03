import React, {useState} from "react";
import talentTrailContext from "./context";


function ContextState(props){
    const [userState, setUserState] = useState(false);
    const [setUserLogin, setUserDetails] = useState(false)
    return(
        <talentTrailContext.Provider value={{userState, setUserState , setUserLogin, setUserDetails}}>
            {props.children}
        </talentTrailContext.Provider>
    )
}

export default ContextState