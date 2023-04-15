import React from "react";
import styled from "styled-components";

import "./App.css";

import BootstrapTest from "./BootstrapTest";

// const Header = () => {
//   return <h2>Hello world!</h2>;
// };

// const Field = () => {
//   const styles = {
//     width: "300px",
//   };
//   return <input style={styles} placeholder="Type here" type="text" />;
// };

// function Btn() {
//   const text = "Log in";
//   const logged = false;

//   return <button>{logged ? "Enter" : text}</button>;
// }

// class Field extends React.Component {
//   render() {
//     const styles = {
//       width: "300px",
//     };
//     return <input style={styles} placeholder="Type here" type="text" />;
//   }
// }

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

export default App;
