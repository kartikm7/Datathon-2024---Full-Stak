import React from "react";

function DashboardHome(){
    const user = JSON.parse(localStorage.getItem("user"))
    const {name, email, imageURL} = user

    return(
        <div className="w-full h-full">
            <h1>Hello {name}! </h1>
        </div>
    )
}

export default DashboardHome