import './App.css';
import Sections from './sections/Sections';
import onHeaderClick from './onHeaderClick';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadBlog } from "./redux/reducers/blogs";
import { TailSpin } from "react-loader-spinner";

function App() {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.blogs);
  const loading = useSelector(state => state.blogs.loading);
  const error = useSelector(state => state.blogs.error);

  useEffect(()=>{
    dispatch(loadBlog());
  },[dispatch]);

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
        {loading ? <div className='loader'><TailSpin height="100" width="100" color='grey' aria-Label='loading'/></div> : 
          error ? <p>{error}</p> : blogs.length === 0 ? <p>No blogs available!</p> : 
          <>
            <Sections id="trending" title="Trending" blogs={blogs}/> 
            <Sections id="popular" title="Most Popular" blogs={blogs}/>
            <Sections id="viewed" title="Most Viewed" blogs={blogs}/>
            <Sections id="choice" title="Your Choice" blogs={blogs}/>
          </>
        }
      </div>
    </div>
  );
}

export default App;
