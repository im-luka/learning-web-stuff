import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increase" | "decrease";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increase":
      return { count: state.count + action.payload };
    case "decrease":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-start">
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increase", payload: 10 })}>
        Increase 10
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: 10 })}>
        Decrease 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
