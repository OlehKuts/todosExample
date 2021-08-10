import React, { useState } from "react";
import { Text } from "./components/text";
import { Todoinput } from "./components/todoinput";

export const TodoText = ({ todo, additionalStyles, onEdit }) => {
  const [isEditable, setIsEditable] = useState(false);

  const onClick = () => (todo.completed ? null : setIsEditable(true));
  const onSaveChanges = text => {
    setIsEditable(false);
    onEdit({ ...todo, text });
  };

  return isEditable ? (
    <Todoinput onAdd={onSaveChanges} initialValue={todo.text} />
  ) : (
    <Text size="10px" {...additionalStyles} onClick={onClick}>
      {todo.text}
    </Text>
  );
};
