import './Blogs.css';

export default function Blogs(props) {
    const {num} =  props;
    let arr = [];

    let blogItems = () => {
        return <li>
            <article>
            <img alt="Blog Image" src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8="/>
                <h5>What is Lorem Ipsum?</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </article>
        </li>
    };

    for(let i = 1; i <= num; i++) {
        arr.push(blogItems());
    }

    return <ul>{arr}</ul>;
} 