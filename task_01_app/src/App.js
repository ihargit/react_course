import './App.css';
import CreateElement from './task_components/CreateElement';
import ReactComponent from './task_components/CreateComponent';
import ReactPureComponent from './task_components/CreatePureComponent';
import FunctionalComponent from './task_components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        <ReactComponent />
        <ReactPureComponent />
        <FunctionalComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
