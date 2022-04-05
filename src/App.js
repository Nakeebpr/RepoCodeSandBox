import "./styles.css";
import { useState } from "react";
import pic from "./image/apple.jfif";

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>Apple</h1>
      <img src={pic} alt="" />
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </div>
  );
}
