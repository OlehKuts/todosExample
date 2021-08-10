import React, { useState, useRef, useEffect } from "react";
import "../styles.css";
import T from "prop-types";

export const Todoinput = ({ onAdd, initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const inputValueChanger = e => setInputValue(e.target.value);
  const onSubmit = e => {
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
        value={inputValue}
        onChange={inputValueChanger}
        placeholder="enter new todo..."
        ref={textInput}
      />
    </form>
  );
};

Todoinput.propTypes = {
  onAdd: T.func.isRequired,
  initialValue: T.string
};

Todoinput.defaultProps = {
  initialValue: ""
};
