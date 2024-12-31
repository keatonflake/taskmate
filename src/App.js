import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React Like a Pro", completed: false },
    { id: 2, name: "Learn React Like a champ", completed: false },
    { id: 3, name: "Learn React Like a wizard", completed: false },
    { id: 4, name: "Learn React Like a stud", completed: true },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
