import { todosReducer, TODOS_ACTIONS, initialState } from "./todosReducer";
import { useReducer, useEffect } from "react";

export const useTodosHook = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState());

  const onAdd = text =>
    dispatch({
      text,
      type: TODOS_ACTIONS.ADD
    });

  const onSwitch = _id =>
    dispatch({
      _id,
      type: TODOS_ACTIONS.COMPLETE
    });

  const onRemove = _id =>
    dispatch({
      _id,
      type: TODOS_ACTIONS.REMOVE
    });

  const onEdit = newTodo =>
    dispatch({
      newTodo,
      type: TODOS_ACTIONS.EDIT
    });

  useEffect(() => {
    const todosStringified = JSON.stringify(todos); //перетв. у JSON-формат
    localStorage.setItem("todos", todosStringified); //зберіг. у хранил. під ключем "todos"
  }, [todos]);

  return {
    todos,
    onAdd,
    onSwitch,
    onRemove,
    onEdit
  };
};
