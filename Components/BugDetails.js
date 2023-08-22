import React, { useEffect, useState } from "react";


function BugDetail(){

const [bug, setBug]=useState(null)
const id = 1

useEffect(()=>{
    fetch(`/bugs/${id}`)
    .then((r)=>r.json())
    .then(data=> setBug(data))
}, [id])

const {name, range, image, plants, descript }= bug

    return(
        <div className="bug-details">
            <h1>{name}</h1>
            <p>{range}, {plants}, {descript}</p>
            <img src={image} alt="oops"></img>
        </div>
    )
}


export default BugDetail