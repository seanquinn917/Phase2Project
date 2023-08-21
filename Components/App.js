import React, { useEffect, useState } from 'react';
import BugCard from './BugCard';
import BugList from './BugList';
import NavBar from './NavBar';
import { Switch, Route} from "react-router-dom"
import Home from './Home';
import SubmitBug from './SubmitBug';




function App() {
  const [bugs, setBugs]= useState([])

  
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/buglist">
           <BugList bugs={bugs} setBugs={setBugs}/>
        </Route>
        <Route path="/submitbug">
          <SubmitBug />
        </Route>
      </Switch>
     
  
      
    </div>
  );
}

export default App;
