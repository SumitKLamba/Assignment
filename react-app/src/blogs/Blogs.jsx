import './Blogs.css';

export default function Blogs(props) {
  const {blog} = props;
  
  return (
    <li>
        <section className="card">
            <img className="blog-img" src={blog.image} alt="Blog Image"/>
            <div className="text-overlay">
                <h3>{blog.title}</h3>
                <div>
                <p>{blog.description}...</p>
                <a href={blog.url}><u>read more</u></a>
                </div>
            </div>
        </section>
      </li>
  );
}
