import React from 'react';
import './App.css';
import Home from './Home'
import {TodoProvider} from "./Context"


function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  )
}

export default App;
