import React from "react";
import { todoListPropTypes } from "./proptypes";
import { Checkbox } from "./checkbox";
import { Icon } from "./icon";
import "./styles.css";
import T from "prop-types";
import { withCheckedStyles } from "./withCheckedStyles";
import { TodoText } from "./todoText";

export const Todoitem = withCheckedStyles(
  ({ todo, onSwitch, onRemove, onEdit, additionalStyles }) => {
    return (
      <div className="toDoItem">
        <Checkbox {...{ todo, onSwitch }} />
        <TodoText {...{ todo, additionalStyles, onEdit }} />
        <Icon name="remove" onClick={() => onRemove(todo._id)} />
      </div>
    );
  }
);

Todoitem.propTypes = {
  ...todoListPropTypes,
  onRemove: T.func.isRequired,
  onEdit: T.func.isRequired,
  additionalStyles: T.shape({
    textDecoration: T.string,
    color: T.string
  })
};
