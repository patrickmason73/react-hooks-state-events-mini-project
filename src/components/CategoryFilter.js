import React from "react";

function CategoryFilter({selectedCategories, categories, handleSelectedCategories, handleSetCategories}) {

  const handleButtons = categories.map((category) => {
    return <button key={category}
    onClick={() => handleSelectedCategories(category)}
    className={category === selectedCategories ? "selected" : null}
    >
      {category}
    </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {handleButtons}
    </div>
  );
}

export default CategoryFilter;
