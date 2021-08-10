import uuid from "uuid/v4";

export const TODOS_ACTIONS = {
  ADD: "add",
  COMPLETE: "complete",
  REMOVE: "remove",
  EDIT: "edit"
}; //об'єкт з констант для уникнення помилок

export const initialState = () => {
  const todosFromStorage = localStorage.getItem("todos"); //отрим. по ключу
  const todosParsed = JSON.parse(todosFromStorage); //parse з JSON-формату
  return todosParsed || []; //повертає todos або пустий масив
};
export const todosReducer = (todos, action) => {
  const { type, _id, text, newTodo } = action;

  switch (type) {
    case TODOS_ACTIONS.ADD:
      return [
        ...todos,
        {
          _id: uuid(),
          text: text,
          completed: false
        }
      ];
    case TODOS_ACTIONS.COMPLETE:
      return todos.map((todo) =>
        todo._id === _id ? { ...todo, completed: !todo.completed } : todo
      );
    case TODOS_ACTIONS.REMOVE:
      return todos.filter((todo) => todo._id !== _id);

    case TODOS_ACTIONS.EDIT:
      return todos.map((todo) => (todo._id !== newTodo._id ? newTodo : todo));

    default:
      throw new Error(); // видаватиме помилку при передачі невідомого методу
  }
}; //власне Reducer, який буде першим парам в useReducer()
