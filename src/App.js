import './App.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { TbSquareNumber1, TbSquareNumber2 } from 'react-icons/tb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>CONVERSE <CgArrowsExpandUpRight /></li>
          </ul>
        </nav>
      </header>
      <div className="heading">
        <h1>Welcome to your Honolulu Bot.</h1>
      </div>

      <section className="content">
        <div className="about">
          <div>
            <h2><TbSquareNumber1 />We're still a work in progress.</h2>
            <p>My creator is still working on me so please be patient, but expect periodic updates to my software.</p>
          </div>
          <div>
            <h2><TbSquareNumber2 />I read thousands real-time text from the city!</h2>
            <p>I'm trained to give you the friendliest informational buddy out on the web. Think of me as your Super Siri or Alexa, I don't mind your fantasies!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
