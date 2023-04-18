import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

function Form() {
  const [text, setText] = useState("");

  const inputRef = useRef(1);

  useEffect(() => {
    inputRef.current = text;
  });

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={inputRef.current}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
}

export default Form;
