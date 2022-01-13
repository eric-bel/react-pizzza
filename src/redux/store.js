import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "ДОБАВИТЬ":
      return state + 1;
    case "ОТНЯТЬ":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter, 15);

export default store;
