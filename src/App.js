import logo from './logo.svg';
import './App.css';
import './stylesheets/styles.css';
// new content
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* another commit */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h1>    I am green
          </h1>
        </a>

        <h1>    I am out
        </h1>
      </header>
    </div>
  );
}

export default App;
