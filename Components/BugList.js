import React, {useEffect} from "react";
import BugCard from "./BugCard";
import BugDetails from "./BugDetails";

function BugList({bugs, setBugs}){

    useEffect(()=>{
        fetch("http://localhost:3030/Pollinators/")
        .then((r)=>r.json())
        .then((data)=>setBugs(data))
      }, []
      )

   
      const displayBugs = bugs.map((bug)=>{
        return <BugCard id={bug.id} key={bug.id} name={bug.name} range={bug.range} image={bug.image} plants={bug.attractiveplants} descript={bug.description} bug={bugs} setBugs={setBugs}/>
      })
    
      
    return(
        <div>
          <span>
          <Link to={`/SubmitBug`}>Add Your Favorite Bug!</Link>
          {displayBugs}
          </span>
        </div>
    )
}

export default BugList