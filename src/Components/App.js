import React from 'react';
import './App.css';
import DueDate from './DueDate';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Due Date Calculator
        </h1>
      </header>
      <DueDate />
    </div>
  );
}

export default App;
