import React, {useEffect, useState} from "react";
import BugCard from "./BugCard";
import BugDetails from "./BugDetails";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SubmitBug from "./SubmitBug";

function BugList({bugs, setBugs, handleNewBug, formData, setFormData}){
  const [showForm, setShowForm]=useState(false)

    useEffect(()=>{
        fetch("http://localhost:3030/Pollinators/")
        .then((r)=>r.json())
        .then((data)=>setBugs(data))
      }, []
      )

   
      const displayBugs = bugs.map((bug)=>{
        return <BugCard id={bug.id} key={bug.id} name={bug.name} range={bug.range} image={bug.image} plants={bug.attractiveplants} descript={bug.description} bug={bugs} setBugs={setBugs}/>
      })
    
      function handleForm(){
        setShowForm((showForm)=>!showForm)
      }

      
    return(
        <div>
          <span>
          {showForm? <SubmitBug formData={formData} setFormData={setFormData} handleNewBug={handleNewBug} /> : null}
          <button onClick={handleForm}>Add your Favorite Bug!</button>
          {displayBugs}
          </span>
        </div>
    )
}

export default BugList