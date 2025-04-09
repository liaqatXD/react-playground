import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import deleteIcon from "../assets/delete.png";
const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const inputRef = useRef(null);
  const emptyList = list.length === 0;

  const handleAddTask = () => {
    if (task !== "") {
      const newTask = {
        id: uuidv4(),
        description: task.trim(),
        isComplete: false,
      };
      setList([...list, newTask]);
      setTask("");
      inputRef.current.focus();
    }
  };

  const handleToggleTask = (taskId) => {
    setList(
      list.map((task) =>
        task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDeleteTask = (taskId) =>
    setList(list.filter((task) => task.id !== taskId));

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="e.g. Eat 🍕"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          ref={inputRef}
        />
        <button onClick={handleAddTask} disabled={!task.trim()}>
          Add Task
        </button>
      </div>

      {emptyList ? (
        <h3>Add some tasks⚡</h3>
      ) : (
        <ul>
          {list.map((task) => (
            <li key={task.id} className="task-container">
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={() => handleToggleTask(task.id)}
              />
              <p className={task.isComplete ? "task-complete" : ""}>
                {task.description}
              </p>
              <img
                src={deleteIcon}
                alt="delete icon"
                className="delete-icon"
                onClick={() => handleDeleteTask(task.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
