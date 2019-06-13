import React, { Component } from 'react';
import logo from './logo.svg';
import { fetchItems } from "./Api";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      jobs: [],
    };

    //this.addJob = this.addJob.bind(this);
  }

  /** Load data from backend. */

  async componentDidMount() {
    let jobs = await fetchItems();
    this.setState({ jobs, isLoading: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
}

export default App;
