import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
const [newCategory, setNewCategory] = useState("code")
const [newText, setNewText] = useState("")
const handleCategories = categories.map(category => (
  <option key={category} name={category}>{category}</option>
 
))

function handleCategory(e) {
  setNewCategory(e.target.value)
}

function handleText(e) {
  setNewText(e.target.value)
}

function formSubmit(e) {
  e.preventDefault()
  onTaskFormSubmit({
    text: newText,
    category: newCategory,
    key: newText
  })
}

  return (
    <form className="new-task-form" onSubmit={formSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {handleCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
