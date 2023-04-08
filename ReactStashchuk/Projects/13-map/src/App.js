import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const buttonsText = ["Click me", "Tap me", "Hit me", "Press me"];

function App() {
  console.log("App rendered");
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {buttonsText.map((text, key) => (
        <Button key={key} onClick={incrementCount}>{text}</Button>
      ))}
    </div>
  );
}

export default App;
