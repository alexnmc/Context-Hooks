import React from 'react';
import './App.css';
import {TodoProvider} from "./Context"
import {TextProvider} from "./Context2"
import Home from './Home'


function App() {
  return (
    <TextProvider>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </TextProvider>
  )
}

export default App;
