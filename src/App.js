import React from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm.js';
import ToDoList from './components/ToDoList.js';

function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
