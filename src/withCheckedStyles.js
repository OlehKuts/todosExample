import React from "react";

export const withCheckedStyles = WrappedComponent => props => {
  const {
    todo: { completed }
  } = props; //деструктуризаціія, отримуєм доступ до параметру в об'єкті todo
  const additionalStyles = completed
    ? { textDecoration: "line-through", color: "red" }
    : {};
  return <WrappedComponent {...{ additionalStyles, ...props }} />; //дод. стилі в обєєкті props
};
