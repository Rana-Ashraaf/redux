import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        increment
      </button>{" "}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
