import { useReducer } from "react";

const initialState = {
  count: 0,
  user: "Balaji",
};

function reducer(state, action) {
  switch (action.type) {
    case "icrement":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return {
        ...state,
        count:
          state.count - 1 && state.count < 1
            ? (state.count = 0)
            : state.count - 1,
      };
    case "userName":
      return {
        ...state,
        user: (state.user = "Avadhut"),
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ count, user }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header>
        <section>
          <div style={{ textAlign: "center", fontSize: "22px" }}>
            <span>{count}</span>{" "}
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>{" "}
            <button onClick={() => dispatch({ type: "icrement" })}>+</button>
          </div>
        </section>

        <section>
          <div style={{ textAlign: "center", fontSize: "22px" }}>
            User: {user}{" "}
            <button onClick={() => dispatch({ type: "userName" })}>
              Update User
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
