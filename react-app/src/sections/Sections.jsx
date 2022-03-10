import './Sections.css';
import React from 'react';
import Blogs from '../blogs/Blogs.jsx';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadBlog } from "../redux/reducers/blogs";

const Sections = React.forwardRef((props, ref) => {
    const {title, id} = props;
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.blogs);
    const loading = useSelector(state => state.blogs.loading);
    const error = useSelector(state => state.blogs.error);

    useEffect(()=>{
        dispatch(loadBlog());
      },[dispatch]);

    return (
        <div ref={ref} id={`${id}`} className={`${title}`}>
            <h2>{title}</h2>,
            <ul>
                {loading ? <p>Loading...</p> : error ? <p>{error}</p> : blogs.length === 0 ? <p>No blogs available!</p> : blogs.filter((filteredBlogs) => filteredBlogs.section == `${title}`).map((blog) => (
                    <Blogs key={blog.key} blog={blog} />
                ))}
            </ul>
        </div>
    );
});

export default Sections;