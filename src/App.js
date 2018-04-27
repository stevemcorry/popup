import React from 'react';
import './App.css';
//import firebase, { auth, provider } from './firebase.js';
import Header from "./templates/header/header";
import Portfolio from "./templates/portfolio/portfolio";

const App = () => {
    return (
      <div className="App">
        {/* <Header name="You suck"/> */}
        <Portfolio />
      </div>
    );
}

export default App;
