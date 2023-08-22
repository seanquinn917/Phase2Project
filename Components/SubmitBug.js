import React, { useState } from "react";


function SubmitBug({handleNewBug}){
const [formData, setFormData]=useState([])

function handleChange(e ){
    e.preventDefault()
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
}

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3030/Pollinators",{
        method:"POST",
        headers: {
            "content-type" : "application/json"
        },
        body:JSON.stringify({
            name: formData.name,
            range: formData.range,
            plants: formData.plants,
            descript: formData.descript,
            image: formData.image
        })
    }).then((r)=>r.json())
      .then((newBug)=>handleNewBug(newBug))
    
    console.log(formData)
}



    return(
        <div>this is where you will be able to submit your fav pollinator to the list!
                <form onSubmit={handleSubmit}>
                    <ul className="form">
                    <label>  Name  </label>
                    <input type="text" name="name"  onChange={handleChange}/>
                    <label>  Range  </label>
                    <input type="text" name="range" onChange={handleChange}/>
                    <label>  Plants  </label>
                    <input type="text" name="plants" onChange={handleChange}/>
                    <label>  Description  </label>
                    <input type="text" name="descript" onChange={handleChange}/>
                    <label>  ImageURL  </label>
                    <input type="text" name="image"  onChange={handleChange}/>
                    <input type="submit" value="submit" />
                    </ul>
                </form>


        </div>
    )
}


export default SubmitBug