import React from "react";
import { Link } from "react-router-dom"


function NavBar(){
    return(
        <div className=".topnav">
            <h1>
            <span>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Buglist">Bugs!</Link></li>
            <li><Link to="/SubmitBug">Add your favorite Bug!</Link></li>
            </ul>   
            </span>    
            </h1>
        </div>
    )
}

export default NavBar;