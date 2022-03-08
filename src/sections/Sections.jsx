import './Sections.css';
import Blogs from '../blogs/Blogs.jsx';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadBlogs } from "../network/actions";

export default function Sections(props) {
    const {title, id} = props;
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogs.data);
    const loading = useSelector(state => state);
    const error = useSelector(state => state);

    useEffect(() => {
        dispatch(loadBlogs());
      }, []);

    return (
        <>
        <h2 id={id}>{title}</h2>,
        <ul>
            {blogs.loading && <p>Loading...</p>}
            {blogs.length === 0 && !loading && <p>No blogs available!</p>}
            {error && !loading && <p>{error}</p>}
            {blogs.length > 0 && blogs.map((blog) => (
                <Blogs key={blog.id} blog={blog} />
            ))}
        </ul>
        </>
    );
}