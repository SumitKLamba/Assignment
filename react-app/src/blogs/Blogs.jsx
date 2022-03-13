import "./Blogs.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Blogs(props) {
  const { blog } = props;

  return (
    <li>
      <section className="card">
        <img className="blog-img" src={blog.image} alt="Blog Image" />
        <div className="text-overlay">
          <h3>{blog.title}</h3>
          <div>
            <p>{blog.description}...</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <a href={blog.url} style={{ textDecoration: "none" }}>
              Read more <BsFillArrowRightCircleFill size={14} />
            </a>
          </div>
        </div>
      </section>
    </li>
  );
}
