import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategories, setSelectedCategories] = useState("All")

function handleTasks(deletedText) {
    setTasks(tasks.filter(task => task.text !== deletedText))
  }

const filteredTasks = tasks.filter(task => task.category === selectedCategories || selectedCategories === 'All')


const handleSelectedCategories = (category) => {
  setSelectedCategories(category)
}

// const filteredTasks = tasks.filter(task => task.category === selectedCategories)

// function handleSetCategories() {
//   setCategories("All")
// }

const onTaskFormSubmit = (newTask) => {
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategories={selectedCategories} categories={CATEGORIES} handleSelectedCategories={handleSelectedCategories}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleTasks={handleTasks} />
    </div>
  );
}

export default App;
