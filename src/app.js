import React from "react";
import { Text } from "./components/text";
import { Todoinput } from "./components/todoinput";
import "./styles.css";
import { Todoitem } from "./todoitem";
import { useTodosHook } from "./useTodosHook";
import { TodosContext } from "./todosContext";

export const App = () => {
  const { todos, onAdd, onSwitch, onRemove, onEdit } = useTodosHook();
  return (
    <div className="application">
      <h2>Todos</h2>
      <Todoinput onAdd={onAdd} />
      <TodosContext.Provider value={todos}>
        <div className="todolist">
          {todos.map((todo, idx) => (
            <Todoitem
              key={todo._id}
              todo={todo}
              onSwitch={onSwitch}
              onRemove={onRemove}
              onEdit={onEdit}
              idx={idx}
            />
          ))}
        </div>
      </TodosContext.Provider>
    </div>
  );
};
