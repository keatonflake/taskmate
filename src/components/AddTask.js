import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          value={taskValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span className="reset" onClick={handleReset}>
          Reset
        </span>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};
