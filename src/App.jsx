import './App.css';
import Sections from './sections/Sections';
import onHeaderClick from './onHeaderClick';
import React, { useState, useEffect } from 'react';

function App() {
  const listenScrollEvent = () => {
    
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  });

  return (
    <div className="App">
      <header>
        <ul>
          {/* <li><a href="#popular">Popular</a></li> We could have done something like this also.
              The param inside onHeaderClick function should match the name of the id
          */}
          <li><button onClick={() => onHeaderClick("trending")}>Trending</button></li>
          <li><button onClick={() => onHeaderClick("popular")}>Most Popular</button></li>
          <li><button onClick={() => onHeaderClick("viewed")}>Most Viewed</button></li>
          <li><button onClick={() => onHeaderClick("choice")}>Your Choice</button></li>
        </ul>
      </header>
      <section>
        <Sections id="trending" title="Trending" /> 
        <Sections id="popular" title="Most Popular" />
        <Sections id="viewed" title="Most Viewed" />
        <Sections id="choice" title="Your Choice" />
      </section>
    </div>
  );
}

export default App;
