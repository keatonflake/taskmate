import { useState } from "react";

import { Header } from "./components/Header.js";
import { AddTask } from "./components/AddTask.js";
import { ShowTask } from "./components/ShowTask.js";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
