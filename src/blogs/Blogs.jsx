import './Blogs.css';

export default function Blogs(props) {
  const {key, blog} = props;
  
  return (
    <li>
        <section class="card">
            <img class="blog-img" src={blog.thumbnail}/>
            <div class="text-overlay">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
            </div>
        </section>
      </li>
  );
}
