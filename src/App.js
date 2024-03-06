import logo from './logo.svg';
import Navbar from './Navbar.js';
import Card from './Card.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>CS 230L</h1>
      <h2>Section- 002</h2>
      <p>WVU ID: 800400854</p>
      <p>Hi I am Lily</p>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
