import "./Sections.css";
import React from "react";
import Blogs from "../blogs/Blogs.jsx";
import { useEffect } from "react";

const Sections = (props) => {
  const { title, id, blogs } = props;

  return (
    <div id={`${id}`} className="section">
      <h2>{title}</h2>,
      <ul>
        {blogs
          .filter((filteredBlogs) => filteredBlogs.section == `${title}`)
          .map((blog) => (
            <Blogs key={blog.key} blog={blog} />
          ))}
      </ul>
    </div>
  );
};

export default Sections;
