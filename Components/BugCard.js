import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function BugCard(props){
const [showDetails, setShowDetails]=useState(false)

const {id, name, range, image, plants, descript, bugs, setBugs}= props



function handleDelete(){
    fetch(`http://localhost:3030/Pollinators/${id}`,{
        method: "DELETE",
    })
    .then((r)=>r.json())
    .then(()=>{
        setBugs(bugs=> {
            return bugs.filter(bug => bug.id !== id)
        })
    })
}
  


    return(
        <div>
            <span>
            <h2>{name}</h2>
            <img src={image} alt="oops"></img>
            <Link to={`/bugs/${id}`}>More Details</Link>
            <h3><button onClick={handleDelete}>Delete this Bug</button></h3>
            </span>
        </div>
    )
}

export default BugCard;