import React from "react";
import { Checkbox } from "./checkbox";
import { Icon } from "./icon";
import "./styles.css";
import { withCheckedStyles } from "./withCheckedStyles";
import { TodoText } from "./todoText";

export const Todoitem = withCheckedStyles(
  ({ todo, onSwitch, onRemove, onEdit, additionalStyles, idx }) => {
    return (
      <div
        className="toDoItem"
        style={{ backgroundColor: idx % 2 === 0 ? "lavenderblush" : "white" }}
      >
        <Checkbox {...{ todo, onSwitch }} />
        <TodoText {...{ todo, additionalStyles, onEdit }} />
        <Icon
          name="remove"
          onClick={() => onRemove(todo._id)}
          size="18px"
          style={{ marginTop: "5px" }}
        />
      </div>
    );
  },
);
