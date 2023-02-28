import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemsUpdated }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState("");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) => {
    // console.log(item);
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    if (selectedItem === "") return true;

    return item.name.toLowerCase().includes(selectedItem);
  })

  function onSearchChange(event) {
    setSelectedItem(event.target.value)
  }

  console.log(selectedItem);

  function onItemFormSubmit(newItem) {
    onItemsUpdated(newItem);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        onCategoryChange={onCategoryChange} 
        onSearchChange={onSearchChange} 
        selectedItem={selectedItem} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
