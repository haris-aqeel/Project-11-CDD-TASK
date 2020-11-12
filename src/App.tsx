import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inputs from './components/Input'
import TaskList from './components/TaskList'
import {Input} from './components/Input'

function App() {

  const [itemsList, setItemsList] = React.useState<Input[]>([]);

  return (
    <div className="App">
      <Inputs itemsList = {itemsList} setItemsList= {setItemsList}/>
      <TaskList listOfItems = {itemsList}/>
    </div>
  );
}

export default App;
