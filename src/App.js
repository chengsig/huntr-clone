import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { fetchItems } from "./Api";
import DndComponent from './Dnd/DndComponent';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** Load data from backend. */
  useEffect(() => {
    async function fetchData() {
      const result = await fetchItems();
      setJobs(result.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DndComponent/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App;
