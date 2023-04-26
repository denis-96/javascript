import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import context from "./context";

function Form(props) {
  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <Input />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
}

function Input() {
  const { mail, forceChangeMail } = useContext(context);
  return (
    <input
      value={mail}
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      onFocus={forceChangeMail}
    />
  );
}

const { Provider } = context;

function App() {
  const [data, setData] = useState({
    mail: "name@example.com",
    text: "some text",
    forceChangeMail,
  });

  function forceChangeMail() {
    setData({ ...data, mail: "test@gmail.com" });
  }

  return (
    <Provider value={data}>
      <Form text={data.text} />
      <button
        onClick={() =>
          setData({
            ...data,
            mail: "second@example.com",
            text: "another text",
          })
        }
      >
        Click me
      </button>
    </Provider>
  );
}

export default App;
