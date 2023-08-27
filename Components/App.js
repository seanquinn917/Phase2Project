import React, { useEffect, useState } from 'react';
import BugCard from './BugCard';
import BugList from './BugList';
import NavBar from './NavBar';
import { Switch, Route} from "react-router-dom"
import Home from './Home';
import SubmitBug from './SubmitBug';
import BugDetails from './BugDetails';




function App() {
  const [bugs, setBugs]= useState([])
  const [formData, setFormData]=useState({})


  function handleNewBug(newBug){
    setBugs([...bugs, newBug])
  
  }

 
  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/bugs/:id">
           <BugDetails />
        </Route>
        <Route exact path="/bugs">
           <BugList formData={formData} setFormData={setFormData} handleNewBug={handleNewBug} bugs={bugs} setBugs={setBugs}/>
        </Route>
        <Route path="/submitbug">
          <SubmitBug handleNewBug={handleNewBug}/>
        </Route>
      </Switch>
     
  
      
    </div>
  );
}

export default App;
