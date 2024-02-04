import React, {useState} from "react";
import talentTrailContext from "./context";


function ContextState(props){
    const [userState, setUserState] = useState(false);
    const [setUserLogin, setUserDetails] = useState(false)
    const [resume, setResume] = useState(false)
    const [test, setTest] = useState(false)
    return(
        <talentTrailContext.Provider value={{userState, setUserState , setUserLogin, setUserDetails, resume, setResume, test, setTest}}>
            {props.children}
        </talentTrailContext.Provider>
    )
}

export default ContextState