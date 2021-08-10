import React from "react";
import T from "prop-types";
import { iconsConfig } from "./configIcons";

export const Icon = ({ name, ...props }) => {
  const IconC = iconsConfig[name];
  return <IconC {...props} />;
};

Icon.propTypes = {
  name: T.string.isRequired,
  size: T.string,
  color: T.string
};

Icon.defaultProps = {
  size: "14px",
  color: "black"
};
