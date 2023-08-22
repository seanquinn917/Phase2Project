import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function BugCard(props){

const {id, name, range, image, plants, descript}= props

    return(
        <div>
            <span></span>
            <h2>{name}</h2>
            <img src={image} alt="oops"></img>
            <Link to={`/bugs/${id}`}>More Details</Link>
        </div>
    )
}

export default BugCard;