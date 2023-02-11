import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleTasks }) {
  console.log(tasks)


  const taskListDisplay =
  tasks.map((task) => (
    <Task 
    text={task.text} 
    category={task.category}
    key={task.text}
    handleTasks={handleTasks}
    />))  
  return (
    <div className="tasks">
      {taskListDisplay}
    </div>
  );
}

export default TaskList;
