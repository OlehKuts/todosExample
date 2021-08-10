import T from "prop-types";

export const recordListPropTypes = {
  todo: T.shape({
    _id: T.string.isRequired,
    text: T.string.isRequired,
    completed: T.bool.isRequired
  }).isRequired,
  onSwitch: T.func.isRequired
};
