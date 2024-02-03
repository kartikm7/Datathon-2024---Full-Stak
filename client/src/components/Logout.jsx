import React, { useContext } from "react";
import { auth } from "../controller/firebaseConfig";
import { signOut } from "firebase/auth";
import talentTrailContext from "./Context/context";
import { Button } from "@nextui-org/react";
import {useNavigate} from "react-router-dom"

function Logout(){

    const navigate = useNavigate()
    const {setUserLogin} = useContext(talentTrailContext)

    async function handleClick(){
        try {
            const result = await signOut(auth);
            console.log(result);
            setUserLogin(false)
            localStorage.removeItem("user")
        } catch (error) {
            console.log(error);
        } finally{
            navigate('/')
        }
    }
    return(
        <Button onClick={handleClick} color="secondary" >Logout</Button>
    )
}

export default Logout