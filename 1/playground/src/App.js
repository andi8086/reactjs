import React from 'react';
import './App.css';
import Counter from './Counter';

// Function or class can be used

// Syntax = JSX: Javascript + XML
// < changes to XML and { changes to JS
// dynamic parts within XML cannot contain objects
function App() {

  const articleName = "ReactJS"

  let coinText
  if (Math.random() < 0.5) {
      coinText = "Kopf"
  } else {
      coinText = "Zahl"

  }
  return (
    <div className="App">
      <h1>Playground</h1>
      <div> Ein Jahr hat {365 * 24} Stunden</div>
      <div> Heute ist der {new Date().toLocaleDateString()}</div>
      <div> {coinText}</div>
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
    </div>
    
  );
}

export default App;
