import React, {useEffect} from "react";
import BugCard from "./BugCard";

function BugList({bugs, setBugs}){

    useEffect(()=>{
        fetch("http://localhost:3030/Pollinators/")
        .then((r)=>r.json())
        .then((data)=>setBugs(data))
      }, []
      )
    
      const displayBugs = bugs.map((bug)=>{
        return <BugCard key={bug.id} name={bug.name} range={bug.range} image={bug.image} plants={bug.attractiveplants} descript={bug.description}/>
      })
    

    return(
        <div>{displayBugs}</div>
    )
}

export default BugList