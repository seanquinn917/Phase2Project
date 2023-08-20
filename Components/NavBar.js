import React from "react";
import { Link } from "react-router-dom"


function NavBar(){
    return(
        <div className=".topnav">
            <h1>
            <span>
            <Link to="/">Home</Link>
            <Link to="/Buglist">Bugs!</Link>
            <Link to="/SubmitBug">Add your favorite Bug!</Link>
            </span>            
            </h1>
        </div>
    )
}

export default NavBar;