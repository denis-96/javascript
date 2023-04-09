import React from "react";
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

class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
    };
  }
  nextYear = () => {
    console.log("+++");
    this.setState((state) => ({ years: state.years + 1 }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Denis" surname="Bargan" link="link.com" />
      <WhoAmI name="Alex" surname="Smith" link="link.com" />
    </div>
  );
}

export default App;
