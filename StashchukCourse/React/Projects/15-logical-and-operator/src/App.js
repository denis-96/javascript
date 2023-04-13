import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";

function App() {
  console.log("App rendered");
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {!!count && <ResetButton onClick={resetCount} />}
    </div>
  );
}

export default App;
