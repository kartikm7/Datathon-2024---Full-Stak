import React, {useState} from "react";
import context from "./context";


function ContextState(props){
    const [userState, setUserState] = useState(false);
    
    return(
        <context.Provider value={{userState, setUserState ,}}>
            {props.children}
        </context.Provider>
    )
}

export default ContextState