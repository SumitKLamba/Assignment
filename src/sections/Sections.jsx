import './Sections.css';
import Blogs from '../blogs/Blogs.jsx';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "../redux/reducers/blogs";

export default function Sections(props) {
    const {title, id} = props;
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.blog.products);

    console.log(blogs);

    useEffect(() => {
        dispatch(getBlog());
      }, []);

    return (
        <>
        <h2 id={id}>{title}</h2>,
        <ul>
            {blogs.length > 0 && blogs.map((blog) => (
                <Blogs key={blog.id} blog={blog} />
            ))}
        </ul>
        </>
    );
}