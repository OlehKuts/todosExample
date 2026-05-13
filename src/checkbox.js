import React, { useState, useContext } from "react";
import { TodosContext } from "./todosContext";

export const Checkbox = ({ todo, onSwitch }) => {
  const [checked, setChecked] = useState(todo.completed);
  const onChange = (event) => {
    onSwitch(event.target.value);
    setChecked(!checked);
  };

  // const theme = useContext(TodosContext);
  return (
    <input
      type="checkbox"
      value={todo._id}
      onChange={onChange}
      checked={checked}
    />
  );
};
