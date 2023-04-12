import React from "react";
import styled from "styled-components";

import "./App.css";

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

function App() {
  return (
    <Wrapper>
      <WhoAmI name="Denis" surname="Bargan" link="link.com" />
      <WhoAmI name="Alex" surname="Smith" link="link.com" />
      <BigButton as="div">Button</BigButton>
    </Wrapper>
  );
}

export default App;
