import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit} ) {
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("Produce");

function handleNewItemConfirm(e) {
  e.preventDefault();
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: newName,
    category: newCategory,
  };
  onItemFormSubmit(newItem);
}

  return (
    <form className="NewItem" onSubmit={handleNewItemConfirm} >
      <label>
        Name:
        <input type="text" name="name" onChange={ (e) => 
        {
          setNewName(e.target.value);
          console.log(newName);
        }}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={ (e) => 
        {
          setNewCategory(e.target.value);
          console.log(newCategory);
        }} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
