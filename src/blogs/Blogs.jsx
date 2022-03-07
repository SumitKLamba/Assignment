import './Blogs.css';

export default function Blogs(props) {
    const {num} =  props;
    let arr = []; //arr holds the amount of blogs that we want a section to have

    let blogItems = () => {
        return <li>
        <section class="card">
            <img class="blog-img" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&w=1000&q=80" />
            <div class="text-overlay">
                <h2>What is Loreum Ipsum?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus... &nbsp;&nbsp;<a href="#" class="read-more">Read More</a></p>
            </div>
        </section>
      </li>
    };

    for(let i = 1; i <= num; i++) {
        arr.push(blogItems());
    }

    return <ul>{arr}</ul>;
} 