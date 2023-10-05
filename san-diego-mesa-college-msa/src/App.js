import logo from './logo.svg';
import SocialFollow from "./SocialFollow"
import './App.css';
import main from "./components/main";
import React from 'react';
import mesvid from './assets/mesvid.mp4'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video src={mesvid} />
        <h1>
          San Diego Mesa Community College MSA

        </h1>
        <SocialFollow />
        <video src={mesvid} />
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

  );

};
export default App;
