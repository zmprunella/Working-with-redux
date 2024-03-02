import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const conuterReducer = (state = initialState, aciton) => {
  if (aciton.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (aciton.type === "increase") {
    return {
      counter: state.counter + aciton.amount,
      showCounter: state.showCounter,
    };
  }
  if (aciton.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (aciton.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(conuterReducer);

export default store;
