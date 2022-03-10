import './App.css';
import Sections from './sections/Sections';
import onHeaderClick from './onHeaderClick';
import React, { useEffect, useRef, useState } from 'react';

function App() {

  // const ref = useRef(null);
  // const [element, setElement] = useState(null);

  // const CallBackFunction = (entries) => {
  //   const [entry] = entries;
  //   console.log(entry.target.id);
  //   setElement(entry.target.id);
  // }

  // const options = {
  //   root: null,
  //   rootMarging: "0px",
  //   threshold: 0.7
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(CallBackFunction, options);
  //   console.log(observer);
  //   if(ref.current) observer.observe(ref.current);
  //   console.log(ref.current);
  //   return () => {
  //     if(ref.current) observer.unobserve(ref.current);
  //   }
  // }, [ref]);

  return (
    <div className="App">
      <div id='header' className= "header">
        <header>
          <ul>

            {/* <li><button onClick={() => onHeaderClick("trending")} style={{color: element === 'trending' ? 'black': 'white'}}>Trending</button></li>
            <li><button onClick={() => onHeaderClick("popular")} style={{color: element === 'popular' ? 'black': 'white'}}>Most Popular</button></li>
            <li><button onClick={() => onHeaderClick("viewed")} style={{color: element === 'viewed' ? 'black': 'white'}}>Most Viewed</button></li>
            <li><button onClick={() => onHeaderClick("choice")} style={{color: element === 'choice' ? 'black': 'white'}}>Your Choice</button></li> */}
            
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
