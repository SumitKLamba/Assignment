import './App.css';
import Sections from './sections/Sections';
import onHeaderClick from './onHeaderClick';
import React, { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState('white');

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
          <li><button onClick={() => onHeaderClick("trending")} style={{color:color}}>Trending</button></li>
          <li><button onClick={() => onHeaderClick("popular")}>Most Popular</button></li>
          <li><button onClick={() => onHeaderClick("viewed")}>Most Viewed</button></li>
          <li><button onClick={() => onHeaderClick("choice")}>Your Choice</button></li>
        </ul>
      </header>
      <section>
        {/* 
          id here is used to give a name to scroll to that postion on click by the onHeaderClick function above 
          title is the name that would appear on screen, best if it matches the button names above
          num is the amount of blogs that we want it to have
        */}
        <Sections id="trending" title="Trending" num="10" /> 
        <Sections id="popular" title="Most Popular" num="20" />
        <Sections id="viewed" title="Most Viewed" num="15" />
        <Sections id="choice" title="Your Choice" num="20" />
      </section>
    </div>
  );
}

export default App;
