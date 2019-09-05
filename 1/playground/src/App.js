import React from 'react';
import './App.css';

// Function or class can be used

// Syntax = JSX: Javascript + XML
// < changes to XML and { changes to JS
// dynamic parts within XML cannot contain objects
function App() {
  return (
    <div className="App">
      <h1>Playground</h1>
      <div> Ein Jahr hat {365 * 24} Stunden</div>
      <div> Heute ist der {new Date().toLocaleDateString()}</div>
    </div>
  );
}

export default App;
