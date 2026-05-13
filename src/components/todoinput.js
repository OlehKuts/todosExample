import React, { useState, useRef, useEffect } from "react";
import "../styles.css";

export const Todoinput = ({ onAdd, initialValue = "" }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const inputValueChanger = (e) => setInputValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    onAdd(inputValue);
    setInputValue("");
  };
  const textInput = useRef();
  useEffect(() => textInput.current.focus(), []);

  return (
    <form onSubmit={onSubmit}>
      <input
        className="todoInput"
        value={inputValue}
        onChange={inputValueChanger}
        placeholder="enter new todo..."
        ref={textInput}
      />
    </form>
  );
};
