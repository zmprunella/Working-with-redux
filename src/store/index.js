import { createStore } from "redux";

const conuterReducer = (state = { counter: 0 }, aciton) => {
  if (aciton.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (aciton.type === "decrement")
    return {
      counter: state.counter - 1,
    };

  return state;
};

const store = createStore(conuterReducer);

export default store;
