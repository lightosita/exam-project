import { useReducer } from "react";

const useCounter = () => {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count++ };

      case "DECREMENT":
        if (state.count <= 0) {
          return { ...state, count: (state.count = 0) };
        }
        return { ...state, count: state.count-- };

      case "RESET":
        return { ...state, count: (state.count = 0) };

      case "INPUT_VALUE":
        return { ...state, input: (state.input = action.payload) };

      case "SET_VALUE":
        return { ...state, count: action.payload };

      default:
        return { ...state };
    }
  };
  const defaultState = {
    count: 0,
    input: "",
  };
  const [state, dispatch] = useReducer(reducerFn, defaultState);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };
  const inputHandler = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };
  const setValueHandler = () => {
    dispatch({ type: "SET_VALUE", payload: state.input });
  };
  return {
    state,
    incrementHandler,
    decrementHandler,
    resetHandler,
    inputHandler,
    setValueHandler,
  };
};

export default useCounter;
