import { createContext } from "react";

const context = createContext({
  mail: "name@example.com",
  text: "some text",
});

export default context;
