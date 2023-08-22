import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function BugDetails(){

const [bugDetail, setBugDetail]=useState([])
const params =useParams()
console.log(params)
const id = 1

useEffect(() => {
    fetch(`http://localhost:3030/Pollinators/${params.id}`)
        .then(r=>r.json())
        .then(data => setBugDetail(data))
}, [params.id])
console.log(bugDetail)
const {name, range, image, attractiveplants, description }= bugDetail

    return(
        <section>
            <div className="bug-details">
                <h1>{name}</h1>
                <p>{range} {attractiveplants} {description}</p>
                <img src={image} alt="oops"></img>
            </div>
        </section>
    )
}


export default BugDetails