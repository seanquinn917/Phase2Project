import React from "react";



function BugCard(props){

const {name, range, image, plants, descript}= props

    return(
        <div>
            <h2>{name}</h2>
            <p>{range}, {plants}, {descript}</p>
            <img src={image} alt="oops"></img>
        </div>
    )
}

export default BugCard;