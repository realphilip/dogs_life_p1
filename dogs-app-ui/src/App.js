import logo from './logo.svg';
import './App.css';
import DogForm from './components/DogForm'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Dog Form
        </p>
        <DogForm />
      </header>
    </div>
  );
}

export default App;
