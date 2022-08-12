import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false,
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      // procurar a tarefa selecionada pelo id
      if(task._id === id) {
        // if(task.isDone) {
        //   task.isDone = false;
        // } else {
        //   task.isDone = true;
        // }
        task.isDone = task.isDone ? false : true;
        // task.isDone = !task.isDone;

        // atualizo o state tasksCompleted
        if(task.isDone) {
          setTasksCompleted(tasksCompleted + 1);
        } else {
          setTasksCompleted(tasksCompleted - 1);
        }
      }
    })

    setTasks(tasksCopy);

  }


  return (
    <div>
      <Summary tasksCompleted={tasksCompleted}/>
      
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTask={toggleTaskDone} /> )}
      </div>
    </div>
  );
}

export default ToDoList;