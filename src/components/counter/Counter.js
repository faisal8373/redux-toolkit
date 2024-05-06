import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(reset());
  };

  return (
    <section>
      <h1>Counter App using Redux Toolkit</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};
export default Counter;
