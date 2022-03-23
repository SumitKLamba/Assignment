import "./App.css";
import { sections } from "./sections";
import BlogList from "./blogList/BlogList";
import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBlog } from "./redux/reducers/blogs";
import { TailSpin } from "react-loader-spinner";
import { ReactComponent as Empty } from "./empty.svg";

function App() {
  //creating ref to scroll to the sections
  const childRefs = useMemo(() => sections.map(() => React.createRef()), [sections.join(",")]);

  const dispatch = useDispatch();
  //returns the blogs data from the state
  const data = useSelector((state) => state.blogsReducer.data);
  //returns true or false according to the loading state of blogs
  const loading = useSelector((state) => state.blogsReducer.loading);
  //returns the error in getting the blogs if there is any
  const error = useSelector((state) => state.blogsReducer.error);

  //for dispatching the function loadBlog() which in return dispatches an action
  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);

  //creating buttons according to the sections defined in the file sections.js
  let buttons = [];
  for (let i = 0; i < sections.length; i++) {
    buttons.push(
      <li>
        <button
          onClick={() => {
            childRefs[i].current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {sections[i][1]}
        </button>
      </li>
    );
  }

  //creating blogList according to the sections defined in the file sections.js
  let blogList = [];
  for (let i = 0; i < sections.length; i++) {
    blogList.push(
      <BlogList
        ref={childRefs[i]}
        id={sections[i][0]}
        section={sections[i][1]}
        blogs={data.blogs}
      />
    );
  }

  return (
    <div className="App">
      <div id="header" className="header">
        <header>
          <ul>{buttons}</ul>
        </header>
      </div>
      <div className="sections">
        {/* showing loader if the blogs are loading, error if loading finishes with an error, 
        an empty.svg with the text if no blogs and sending the blogs to the blogList if everything's okay */}
        {loading ? (
          <div className="loader">
            <TailSpin height="100" width="100" color="skyblue" />
          </div>
        ) : error ? (
          <div className="noBlogs">{error.message}</div>
        ) : JSON.stringify(data) === "{}" ? (
          <div className="noBlogs">
            <Empty className="empty" />
            No Blogs to show
          </div>
        ) : (
          <>{blogList}</>
        )}
      </div>
    </div>
  );
}

export default App;
