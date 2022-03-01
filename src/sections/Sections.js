import './Sections.css';
import Blogs from '../blogs/Blogs.js';

export default function Sections(props) {
    const {title, num, id} = props;
    return (
        <>
        <h2 id={id}>{title}</h2>,
        <Blogs num={num}/>
        </>
    );
}