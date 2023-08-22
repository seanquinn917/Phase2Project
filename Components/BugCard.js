import React from "react";



function BugCard(props){

const {name, range, image, plants, descript}= props

    return(
        <div>
            <span></span>
            <h2>{name}</h2>
            <img src={image} alt="oops"></img>
        </div>
    )
}

export default BugCard;