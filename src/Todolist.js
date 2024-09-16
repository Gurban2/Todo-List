import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ text: "", index: null });

  const handleChange = (e) => {
    setTask({ ...task, text: e.target.value });
  };

  const addOrEditTask = () => {
    if (task.text.trim() === "") return;

    if (task.index === null) {
      // Добавление новой задачи
      setTasks([...tasks, task.text]);
    } else {
      const updatedTasks = tasks.map((t, i) =>
        i === task.index ? task.text : t
      );
      setTasks(updatedTasks);
    }

    setTask({ text: "", index: null });
  };

  const startEdit = (index) => {
    setTask({ text: tasks[index], index });
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const allTasksCount = tasks.length > 0 ? tasks.length : "No tasks";

  return (
    <div className="todo">
      <div className="inp-btn">
        <input
          type="text"
          className="input"
          value={task.text}
          onChange={handleChange}
        />
        <button onClick={addOrEditTask} className="add">
          {task.index === null ? "Add Task" : "Save Task"}
        </button>
      </div>
      <ol className="todo-list">
        {tasks.map((taskText, index) => (
          <li key={index}>
            <span className="text">{taskText}</span>
            <button className="delete" onClick={() => removeTask(index)}>
              Remove task
            </button>

            <button className="change" onClick={() => startEdit(index)}>
              Change task
            </button>
          </li>
        ))}
      </ol>
      <footer className="footer">Active Tasks: {allTasksCount}</footer>
    </div>
  );
}

export default Todolist;
