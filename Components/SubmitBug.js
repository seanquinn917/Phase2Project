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
        method:"PUSH",
        headers: {
            "content-type" : "application/json"
        },
        body:JSON.stringify({
            name: formData.name,
            range: formData.range,
            plants: formData.plants,
            descript: formData.descript
        })
    }).then((r)=>r.json())
      .then((newBug)=>handleNewBug(newBug))
    
    console.log(formData)
}



    return(
        <div>this is where you will be able to submit your fav pollinator to the list!
                <form onSubmit={handleSubmit}>
                    <label>name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    <label>range</label>
                    <input type="text" name="range" onChange={handleChange}/>
                    <label>plants</label>
                    <input type="text" name="plants" onChange={handleChange}/>
                    <label>description</label>
                    <input type="text" name="descript" onChange={handleChange}/>
                    <input type="submit" value="submit" />
                </form>


        </div>
    )
}


export default SubmitBug