import "./BlogList.css";
import React from "react";
import BlogItem from "../blogItem/BlogItem.jsx";

const BlogList = React.forwardRef((props, ref) => {
  const { section, id, blogs } = props;

  //filtering the blogs data accoring to the sections
  const newBlogs = blogs.filter((filteredBlogs) => filteredBlogs.section === `${section}`);

  return (
    <div ref={ref} id={`${id}`} className="section">
      {/* title of the section */}
      <h2>{section}</h2>,
      <div className="blogItems">
        {/* spreading the blogs */}
        <ul>
          {newBlogs.length === 0 ? (
            <div className="noBlogsSection">No Blogs for this section</div>
          ) : (
            newBlogs.map((blog, key) => <BlogItem key={key} blog={blog} />)
          )}
        </ul>
      </div>
    </div>
  );
});

export default BlogList;
