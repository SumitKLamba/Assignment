import './Sections.css';
import Blogs from '../blogs/Blogs.jsx';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadBlog } from "../redux/reducers/blogs";

export default function Sections(props) {
    const {title, id} = props;
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.blog.products);
    const loading = useSelector(state => state.blogs.loading);
    const error = useSelector(state => state.blogs.error);

    useEffect(()=>{
        dispatch(loadBlog());
      },[dispatch]);

    return (
        <div className={`${title}`}>
        <h2 id={`${id}`}>{title}</h2>,
        <ul>
            {loading ? <p>Loading...</p> : error ? <p>{error}</p> : blogs.length === 0 ? <p>No blogs available!</p> : blogs.map((blog) => (
                <Blogs blog={blog} />
            ))}
        </ul>
        </div>
    );
}