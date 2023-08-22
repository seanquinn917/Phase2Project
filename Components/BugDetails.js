import React, { useEffect, useState } from "react";


function BugDetails(){

const [bugDetail, setBugDetail]=useState([])
const id = 1

useEffect(() => {
    fetch(`/pollinators/${id}`)
        .then((r)=>r.json())
        .then((data) => setBugDetail(data.bugDetail))
}, [id])

const {name, range, image, plants, descript }= bugDetail

    return(
        <section>
            <div className="bug-details">
                <h1>{name}</h1>
                <p>{range}, {plants}, {descript}</p>
                <img src={image} alt="oops"></img>
            </div>
        </section>
    )
}


export default BugDetails