import "./BlogItem.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function BlogItem(props) {
  const { blog } = props;

  return (
    <li>
      <section className="card">
        <img className="blog-img" src={blog.image} alt="Blog Image" />
        {/* Thumbnail for the blog */}
        <div className="text-overlay">
          <h3>{blog.title}</h3> {/* Title of the blog */}
          <div>
            <p>{blog.description}...</p>
            {/* description of the blog */}
          </div>
          <div className="read-more">
            <a href={blog.url} style={{ textDecoration: "none" }}>
              Read more <BsFillArrowRightCircleFill size={14} />
            </a>
          </div>
        </div>
      </section>
    </li>
  );
}
