import React, { useContext } from "react";
import talentTrailContext from "./Context/context";
import { auth, provider } from "../controller/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import {LogIn} from "lucide-react"

function Login(){
    const navigate = useNavigate();
    const {setUserLogin, setUserDetails} = useContext(talentTrailContext)

    async function handleClick(){
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
            const user = {
                name: result.user.displayName,
                email: result.user.email,
                uid: result.user.uid,
                imageURL: result.user.photoURL
            }
            localStorage.setItem("user", JSON.stringify(user));
            setUserLogin(true);
        } catch (error) {
            console.log(error);
        } finally{
            const type = localStorage.getItem("type");
            navigate(type ? '/dashboard' : '/who' )
        }

    }

    return(
        <Button startContent={<LogIn className="scale-75" />} onClick={handleClick} color="secondary" variant="shadow" >Login</Button>
    )
}

export default Login