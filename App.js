import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BugCard from '../src/BugCard';
import BugList from '../src/BugList';




function App() {
  const [bugs, setBugs]= useState([])
console.log(bugs)
  
  return (
    <div className="App">
      <header className="App-header">
        <BugList bugs={bugs} setBugs={setBugs}/>
      </header>
    </div>
  );
}

export default App;
