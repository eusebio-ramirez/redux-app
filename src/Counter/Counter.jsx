import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(parseInt(amount)))}>
          Incrementar a: {amount}
        </button>
      </div>
    </div>
  );
};

export default Counter;
