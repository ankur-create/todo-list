import logo from './logo.svg';
import './App.css';
import Addtask from './components/addtask';
import ViewTask from './components/ViewTask';
import { useState } from 'react';

function App() {
  const [tasklist ,setTaskList]=useState([]);
 
  return (
    <div className="App">
      <h3 className=' text-center bg-info'><b>TODO LIST</b></h3>
     <Addtask tasklist={tasklist} setTaskList={setTaskList}/>
     <ViewTask tasklist={tasklist} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
