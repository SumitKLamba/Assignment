import './App.css';
import Sections from './sections/Sections';
import onHeaderClick from './onHeaderClick';
import React, { useEffect, useRef } from 'react';

function App() {

  return (
    <div className="App">
      <div id='header' className= "header">
        <header>
          <ul>
            <li><button onClick={() => onHeaderClick("trending")}>Trending</button></li>
            <li><button onClick={() => onHeaderClick("popular")}>Most Popular</button></li>
            <li><button onClick={() => onHeaderClick("viewed")}>Most Viewed</button></li>
            <li><button onClick={() => onHeaderClick("choice")}>Your Choice</button></li>
          </ul>
        </header>
      </div>
      <div className="sections">
          <Sections id="trending" title="Trending" /> 
          <Sections id="popular" title="Most Popular" />
          <Sections id="viewed" title="Most Viewed" />
          <Sections id="choice" title="Your Choice" />
      </div>
    </div>
  );
}

export default App;
