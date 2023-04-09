import { Component } from "react";

import "./Employee.css";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increased: false,
      rised: false,
    };
  }

  toggleIncreaseHandler = () => {
    this.setState(({ increased }) => ({ increased: !increased }));
  };

  likeHandler = () => {
    this.setState(({ rised }) => ({ rised: !rised }));
  };

  render() {
    const { name, salary, deleteHandler } = this.props;
    const { increased, rised } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    classNames += increased ? " increase" : "";
    classNames += rised ? " like" : "";

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.likeHandler}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.toggleIncreaseHandler}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={deleteHandler}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default Employee;
