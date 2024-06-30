import { useReducer } from "react";

export function Reducer() {
    //useReducer(()=> {}, {define state})
    //action  => to be dispatched

    const [state, dispatch] = useReducer(
        (state, action) => {
            //action Types => CRUD operation  => type, value
            if (action.type === "nameUpdate") {
                return {
                    ...state,
                    name: action.value,
                };
            }
            if (action.type === "nameDelete") {
                return {
                    ...state,
                    name: "",
                };
            }
            if (action.type === "updatePass") {
                return {
                    ...state,
                    password: action.value,
                };
            }
            if (action.type === "countIncr") {
                return {
                    ...state,
                    count: state.count + 1,
                };
            }
            if (action.type === "countDec") {
                return {
                    ...state,
                    count: state.count - 1,
                };
            }
        },
        {
            name: "Jack",
            count: 1,
            password: "12345",
        }
    );

    return (
        <div>
            <h1>Reducer Example</h1>
            <h1>{state.name}</h1>
            <button onClick={() => dispatch({ type: "nameUpdate", value: "John" })}>
                Get Value
            </button>
            <button onClick={() => dispatch({ type: "nameDelete" })}>
                Delete Name
            </button>

            <h1>{state.password}</h1>

            <input
                type="text"
                onChange={(e) =>
                    dispatch({ type: "updatePass", value: e.target.value })
                }
            />
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "countIncr" })}>Increment</button>
            <button onClick={() => dispatch({ type: "countDec" })}>Decrement</button>
        </div>
    );
}
