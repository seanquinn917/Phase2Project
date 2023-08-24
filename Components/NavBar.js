import React from "react";
import { Link } from "react-router-dom"


function NavBar(){
    return(
        <div className="navBar">
         <h1>
            <ul className="navBar">
            <li className="topnav"><Link to="/home">Home</Link></li>
            <li className="topnav"><Link to="/Bugs">Pollinators</Link></li>
            {/* <li className="topnav"><Link to="/SubmitBug">Add your favorite!</Link></li> */}
            </ul>   
        </h1>
            
        </div>
    )
}

export default NavBar;