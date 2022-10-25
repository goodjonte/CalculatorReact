import './App.css';
import { useState } from 'react';
import CalcButtons from './Components/calcbuttons'; 
import Inputs from './Components/inputs.js';

function App() {
  const[answer, setAnswer] =  useState("");
  const[first, setFirst] = useState(0);
  const[second, setSecond] = useState(0);  

  const Calculate = (value) => {
    console.log("value", value);
    if (value !== ""){
      switch  (value) { 
        case "-":
          setAnswer(first - second);
          break;
        case "+":
          setAnswer(parseInt(first) + parseInt(second));
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
    <div className='App'>
      <h1>Simple Calculator</h1>
      <Inputs 
      first={first}
    second={second}
      setFirst={setFirst}
      setSecond={setSecond}
      answer={answer}
      />
      <CalcButtons  Calculate = {Calculate}/>
    </div>
  );
}

export default App;
