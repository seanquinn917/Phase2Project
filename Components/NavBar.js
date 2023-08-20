import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/Buglist">Bugs!</Link>
            <Link to="/SubmitBug">Add your favorite Bug!</Link>
        </div>
    )
}

export default NavBar;