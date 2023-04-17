/*
import React from "react";
import "./App.css";

import styled from "styled-components";
import BootstrapTest from "./BootstrapTest";

const Header = () => {
  return <h2>Hello world!</h2>;
};

const Field = () => {
  const styles = {
    width: "300px",
  };
  return <input style={styles} placeholder="Type here" type="text" />;
};

function Btn() {
  const text = "Log in";
  const logged = false;

  return <button>{logged ? "Enter" : text}</button>;
}

class Field extends React.Component {
  render() {
    const styles = {
      width: "300px",
    };
    return <input style={styles} placeholder="Type here" type="text" />;
  }
}

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    margin: 10px 0;
    color: ${(props) => (props.active ? "orange" : "black")};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`;

class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    };
    // this.nextYear = this.nextYear.bind(this);
  }
  nextYear() {
    console.log(this); // undefined, если не биндить this (сткрока 39)
    this.setState((state) => ({ years: state.years + 1 }));
  }

  commitInputChanges = (event, color) => {
    console.log(color);
    this.setState({ position: event.target.value });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    console.log(this);
    return (
      <EmpItem active>
        <Button onClick={() => this.nextYear()}>{this.state.text}</Button>
        <Header>
          My name is {name}, surname - {surname}, age - {years}, position -{" "}
          {position}
        </Header>
        <a href={link}>My profile</a>

        <form>
          <span>введите должность</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </EmpItem>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function DynamicGreeting(props) {
  return (
    <div className={`mb-3 p-3 border border-${props.color}`}>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          className: "shadow p-3 m-3 border rounded",
        })
      )}
    </div>
  );
}

function HelloGreeting() {
  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      <DynamicGreeting color="primary">
        <h2>Hello world</h2>
      </DynamicGreeting>
    </div>
  );
}

function Message(props) {
  return <h2>The counter is {props.counter}</h2>;
}

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  changeCounter = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    );
  }
}

function App() {
  return (
    <Wrapper>
      <Counter render={(counter) => <Message counter={counter} />} />
      <HelloGreeting />
      <BootstrapTest
        left={
          <DynamicGreeting color="primary">
            <h2>Some text</h2>
            <h2>Hello world</h2>
          </DynamicGreeting>
        }
        right={
          <DynamicGreeting color="primary">
            <h2>Right</h2>
          </DynamicGreeting>
        }
      />
      <WhoAmI name="Denis" surname="Bargan" link="link.com" />
      <WhoAmI name="Alex" surname="Smith" link="link.com" />
      <BigButton as="div">Button</BigButton>
    </Wrapper>
  );
}
*/

import { Component, createRef } from "react";
import { createPortal } from "react-dom";
import { Container } from "react-bootstrap";
import "./App.css";

class Form extends Component {
  emailInputRef = createRef();
  textareaRef = createRef();
  elementRef = createRef();

  state = {
    advOpen: false,
  };

  componentDidMount() {
    // this.emailInputRef.current.doSomething(); // ref ссылается на React компонент
    // this.textareaRef.current.focus(); // ref ссылается на DOM элемент
    // console.log(this.emailInputRef);
    // console.log(this.textareaRef);
    // console.log(this.elementRef);
    setTimeout(this.onClick, 3000);
  }

  setDivRef = (element) => {
    this.elementRef = element;
  };

  focusTextArea = () => {
    this.textareaRef.current.focus();
  };

  onClick = () => {
    this.setState(({ advOpen }) => ({ advOpen: !advOpen }));
  };

  render() {
    return (
      <Container>
        <form
          onClick={this.onClick}
          className="w-50 border mt-5 p-3 m-auto"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div className="mb-3" ref={this.setDivRef}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <TextInput ref={this.emailInputRef} onClick={this.focusTextArea} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              ref={this.textareaRef}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          {this.state.advOpen && (
            <Portal>
              <Message />
            </Portal>
          )}
        </form>
      </Container>
    );
  }
}

function Portal({ children }) {
  const node = document.createElement("div");
  document.body.append(node);
  return createPortal(children, node);
}

function Message() {
  return (
    <div
      style={{
        width: "500px",
        height: "150px",
        backgroundColor: "red",
        position: "absolute",
        right: "0",
        bottom: "0",
      }}
    >
      Hello
    </div>
  );
}

class TextInput extends Component {
  doSomething = () => {
    console.log("something");
  };

  render() {
    return (
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        {...this.props}
      />
    );
  }
}

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
