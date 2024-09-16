import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    text: "",
    index: null,
    isCompleted: false,
  });

  const handleChange = (e) => {
    setTask({ ...task, text: e.target.value });
  };

  const addOrEditTask = () => {
    if (task.text.trim() === "") return;

    if (task.index === null) {
      setTasks([...tasks, { text: task.text, isCompleted: false }]);
    } else {
      const updatedTasks = tasks.map((t, i) =>
        i === task.index ? { ...t, text: task.text } : t
      );
      setTasks(updatedTasks);
    }

    setTask({ text: "", index: null, isCompleted: false });
  };

  const startEdit = (index) => {
    setTask({ text: tasks[index].text, index });
  };

  const startCompleted = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTasks(updatedTasks);
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
        {tasks.map((taskObj, index) => (
          <li
            key={index}
            className={taskObj.isCompleted ? "completed-task" : ""}
          >
            <span className="text">{taskObj.text}</span>
            <div className="btn-wrapper">
              <button className="delete" onClick={() => removeTask(index)}>
                Remove task
              </button>

              <button className="change" onClick={() => startEdit(index)}>
                Change task
              </button>
              <button
                className="completed"
                onClick={() => startCompleted(index)}
              >
                {taskObj.isCompleted ? "Uncomplete task" : "Complete task"}
              </button>
            </div>
          </li>
        ))}
      </ol>
      <footer className="footer">Active Tasks: {allTasksCount}</footer>
    </div>
  );
}

export default Todolist;
