import { createStore } from "redux";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCEREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counter);
