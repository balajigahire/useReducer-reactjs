import { useReducer } from "react";

const initialState = {
  count: 0,
  user: "Balaji",
  hideText: null,
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

    case "show":
      return {
        ...state,
        hideText: (state.hideText = false),
      };
    case "hide":
      return {
        ...state,
        showText: (state.hideText = true),
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ count, user, hideText }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

        <section style={{ marginTop: "20px" }}>
          <div style={{ textAlign: "center", fontSize: "22px" }}>
            User: {user}{" "}
            <button onClick={() => dispatch({ type: "userName" })}>
              Update User
            </button>
          </div>
        </section>

        <section
          style={{ marginTop: "20px", textAlign: "center", fontSize: "22px" }}
        >
          <button onClick={() => dispatch({ type: "hide" })}>Show</button>{" "}
          <button onClick={() => dispatch({ type: "show" })}>Hide</button>
          {hideText && <p>Hide/Show content useing useReducer</p>}
        </section>
      </header>
    </div>
  );
}

export default App;
