// import { useState } from "react";

function Task(props) {
  // const [taskCompleted, setTaskCompleted] = useState(false);

  // const toggleTask = () => setTaskCompleted(!taskCompleted);

  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{props.task.name}</h1>
        {/* {taskCompleted  */}
        {props.task.isDone 
          ? <span>DONE </span>
          : <span>PENDING ⌛</span>
        }

        <h2>Task Description</h2>
        <p>{props.task.description}</p>

        {/* <button className="add" onClick={() => toggleTask()}> */}
        <button className="add" onClick={() => props.toggleTask(props.task._id)}>
          {/* {taskCompleted  */}
          {props.task.isDone
            ? <span>UNDO </span> 
            : <span>✔️</span>
          }
        </button>
      </div>
    </div>
  );
}

export default Task;