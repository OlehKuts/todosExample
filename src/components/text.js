import React from "react";
import "../styles.css";

export const Text = ({
  size = "14px",
  onClick = () => null,
  children,
  ...props
}) => (
  <div className="text" {...{ onClick }} style={{ fontSize: size, ...props }}>
    {children}
  </div>
);
