import './App.css';
import Sections from './sections/Sections';
import onHeaderClick from './onHeaderClick';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li><button onClick={() => onHeaderClick("trending")}>Trending</button></li>
          <li><button onClick={() => onHeaderClick("popular")}>Most Popular</button></li>
          <li><button onClick={() => onHeaderClick("viewed")}>Most Viewed</button></li>
          <li><button onClick={() => onHeaderClick("choice")}>Your Choice</button></li>
        </ul>
      </header>
      <section>
        <Sections id="trending" title="Trending" num="20" />
        <Sections id="popular" title="Most Popular" num="20" />
        <Sections id="viewed" title="Most Viewed" num="20" />
        <Sections id="choice" title="Your Choice" num="20" />
      </section>
    </div>
  );
}

export default App;
