import './Blogs.css';

export default function Blogs(props) {
  const {blog} = props;
  
  return (
    <li>
        <section className="card">
            <img className="blog-img" src={blog.image} alt="Blog Image"/>
            <div className="text-overlay">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
            </div>
        </section>
      </li>
  );
}
