import React from "react";

export const ShowTask = ({ task, setTask, taskList, setTaskList }) => {
  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => setTaskList([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((toDo) => (
          <li key={toDo.id}>
            <p>
              <span className="name">{toDo.name}</span>
              <span className="time">{toDo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(toDo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(toDo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
