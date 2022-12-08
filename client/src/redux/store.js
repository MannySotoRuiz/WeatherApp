import { createStore } from "redux";

const reducer = (preState = { value: "60" }, actions) => {
  let newState = { ...preState };
  if (actions.value!==undefined) {
    newState.value = actions.value;
    return newState;
  } else {
    return preState;
  }
};

const store = createStore(reducer);

export default store;
