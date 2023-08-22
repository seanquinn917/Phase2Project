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
        return <BugCard id={bug.id} key={bug.id} name={bug.name} range={bug.range} image={bug.image} plants={bug.attractiveplants} descript={bug.description}/>
      })
    

    return(
        <div>
          <span>
          {displayBugs}
          </span>
        </div>
    )
}

export default BugList