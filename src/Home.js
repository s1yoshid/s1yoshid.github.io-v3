import React from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload. Test
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
     /*
      <div>
        <main>
        <div class="helper">
          RESIZE THE WINDOW
        <span>Breakpoints on 900px and 400px</span>
        </div>
        </main>
      </div>
      */
    );
  }
}

export default Home;