import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const[answer, setAnswer] =  useState("");
  const[first, setFirst] = useState(10);
  const[second, setSecond] = useState(22);  

  const Calculate = (value) => {
    console.log("value", value);
    if (value !== ""){
      switch  (value) { 
        case "-":
          setAnswer(first - second);
          break;
        case "+":
          setAnswer(first + second);
          break;
        case "*":
          setAnswer(first * second);
          break;
        case "/":
          setAnswer(first / second);
          break;
          
        default:
          setAnswer("error");
                  break;
      }
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
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
