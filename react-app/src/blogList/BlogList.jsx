import "./BlogList.css";
import React from "react";
import BlogItem from "../blogItem/BlogItem.jsx";

const BlogList = React.forwardRef((props, ref) => {
  const { section, id, blogs } = props;

  return (
    <div ref={ref} id={`${id}`} className="section">
      <h2>{section}</h2>,
      <div className="blogItems">
        <ul>
          {blogs
            .filter((filteredBlogs) => filteredBlogs.section === `${section}`)
            .map((blog, key) => (
              <BlogItem key={key} blog={blog} />
            ))}
        </ul>
      </div>
    </div>
  );
});

export default BlogList;
