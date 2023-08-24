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

const {name, range, image, attractiveplants, description }= bugDetail

    return(
        <span>
            <div className="bug-details">
                <h1>{name}</h1>
                <img src={image} alt="oops"></img>
                <ul className="bee-info">
                    <li className="range">Native Range: {range}</li>
                    <li className="plants">Plants I love: {attractiveplants}</li>
                    <li className="script">Interesting Facts: {description}</li>
                </ul>
            </div>
        </span>
    )
}


export default BugDetails