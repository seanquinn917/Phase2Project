import React from "react";



function BugCard(props){

const {name, range, image, plants, descript}= props

    return(
        <div>
            <h1>{name}</h1>
            <ul></ul>
            <p>{range}, {plants}, {descript}</p>
            <img src={image} alt="oops"></img>
        </div>
    )
}

export default BugCard;