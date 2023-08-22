import React from "react";
import { Link } from "react-router-dom"


function NavBar(){
    return(
        <div >
            <h1>
            <ul className="topnav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Bugs">Bugs!</Link></li>
            <li><Link to="/SubmitBug">Add your favorite Bug!</Link></li>
            </ul>   
            </h1>
            
        </div>
    )
}

export default NavBar;