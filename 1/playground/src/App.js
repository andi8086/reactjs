import React, { useState} from 'react';
import './App.css';
import Counter from './Counter';
import SlideShow from './Slideshow';

// Function or class can be used

// Syntax = JSX: Javascript + XML
// < changes to XML and { changes to JS
// dynamic parts within XML cannot contain objects
function App() {
  
  const articleName = "ReactJS"
  const [CoinText, setCoinText] = useState(Math.random() < 0.5 ? "Kopf" : "Zahl")
  const [input1, setinput1] = useState("placeholder");

  return (
    <div className="App">
      <h1>Playground</h1>
      <div> Ein Jahr hat {365 * 24} Stunden</div>
      <div> Heute ist der {new Date().toLocaleDateString()}</div>
      <div> {CoinText}</div>
      <div>
        <a href={'https://en.wikipedia.org/wiki/' + articleName}>
          {articleName}
        </a>
      </div>
      <div>
        <button onClick={alert}>Click me</button>
      </div>
      <h2>Counter</h2>
      <Counter></Counter>
      <SlideShow></SlideShow>
      <h2>Inputs</h2>
      <input onChange={ (e) => setinput1(e.target.value) } value={ input1 }/>
      <button onClick={ () => setinput1("") }>clear</button>
      </div>
    
  );
}

export default App;
