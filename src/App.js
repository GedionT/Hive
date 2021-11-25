import logo from "./assets/logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome Hivers</p>
        <a
          className="App-link"
          href="github.com/gediont"
          target="_blank"
          rel="noopener noreferrer"
        >
          Under construction, Checkout Later
        </a>
      </header>
    </div>
  );
}

export default App;
