import { Component } from "react";

import "./EmployeeAddForm.css";

class EmployeeAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  inputChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    const { addEmployee } = this.props;
    const { name, salary } = this.state;
    addEmployee(name, salary);

    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="add-form-container">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.formSubmitHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            required
            minLength={3}
            onChange={this.inputChangeHandler}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            required
            onChange={this.inputChangeHandler}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeAddForm;
