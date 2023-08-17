import React from "react";



function BugCard(props){

const {name, range, image, plants, descript}= props

    return(
        <div>
            <h1>{name}</h1>
            <ul></ul>
            <span>{range}, {plants}, {descript}</span>
            <img src={image} alt="oops"></img>
        </div>
    )
}

export default BugCard;