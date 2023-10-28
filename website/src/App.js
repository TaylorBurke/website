import logo from './logo.svg';
import './App.css';
import portrait from './image/portrait.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img className="heroImage" src={portrait}/>
        <p>
          Developer + <br/>Consultant.
        </p>
      
      </header>
    </div>
  );
}

export default App;
