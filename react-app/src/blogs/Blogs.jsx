import './Blogs.css';

export default function Blogs(props) {
  const {blog} = props;
  
  return (
    <li>
        <section class="card">
            <img class="blog-img" src={blog.thumbnail} alt="Blog Image"/>
            <div class="text-overlay">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
            </div>
        </section>
      </li>
  );
}
