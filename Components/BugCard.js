import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function BugCard(props){
const [showDetails, setShowDetails]=useState(false)

const {id, name, range, image, plants, descript}= props

function handleClick(){
 setShowDetails((showDetails)=>!showDetails)
 console.log('click')
}

    return(
        <div>
            <span>
            <h2>{name}</h2>
            <img src={image} alt="oops"></img>
            <Link to={`/bugs/${id}`}>More Details</Link>
            </span>
        </div>
    )
}

export default BugCard;