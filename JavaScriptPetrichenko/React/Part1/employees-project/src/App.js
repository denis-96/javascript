import { Component } from "react";

import "./App.css";
import Info from "./components/Info/Info";
import FilterBar from "./components/Employees/EmployeesFilterBar";
import EmployeesList from "./components/Employees/EmployeesList";
import EmployeeAddForm from "./components/Employees/EmployeeAddForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: "ewertt3",
          name: "John C.",
          salary: 800,
          increased: false,
          rised: false,
        },
        {
          id: "fewe2321",
          name: "Alex M.",
          salary: 3000,
          increased: false,
          rised: false,
        },
        {
          id: "pfkl341",
          name: "Carl W.",
          salary: 5000,
          increased: false,
          rised: false,
        },
      ],
      searchQuery: "",
      filter: "",
    };
  }

  filters = {
    all: () => true,
    forRise: (employee) => employee.rised,
    salaryOverThousand: (employee) => employee.salary > 1000,
  };

  deleteEmployeeHandler = (id) => {
    this.setState(({ employees }) => ({
      employees: employees.filter((employee) => id !== employee.id),
    }));
  };

  addEmployeeHandler = (name, salary) => {
    const newEmployee = {
      name,
      salary,
      increased: false,
      rised: false,
      id: Math.random().toString(36).substring(2, 12),
    };
    this.setState(({ employees }) => ({
      employees: [...employees, newEmployee],
    }));
  };

  togglePropHandler = (id, prop) => {
    this.setState(({ employees }) => ({
      employees: employees.map((employee) =>
        employee.id === id
          ? { ...employee, [prop]: !employee[prop] }
          : { ...employee }
      ),
    }));
  };

  changeSearch = (searchQuery) => {
    this.setState({ searchQuery });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  filterEmployees = (employees, searchQuery, filter) => {
    if (!searchQuery.length && !filter) {
      return employees;
    }
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 &&
        this.filters?.[filter](employee)
    );
  };

  render() {
    const { employees, searchQuery, filter } = this.state;
    const totalEmployees = employees.length;
    const increasedEmployees = employees.reduce(
      (prev, next) => prev + next.increased,
      0
    );

    const visibleEmployees = this.filterEmployees(
      employees,
      searchQuery,
      filter
    );
    return (
      <div className="app">
        <Info
          totalEmployees={totalEmployees}
          increasedEmployees={increasedEmployees}
        />
        <FilterBar
          changeSearch={this.changeSearch}
          changeFilter={this.changeFilter}
        />
        <EmployeesList
          employees={visibleEmployees}
          deleteEmployeeHandler={this.deleteEmployeeHandler}
          togglePropHandler={this.togglePropHandler}
        />
        <EmployeeAddForm addEmployee={this.addEmployeeHandler} />
      </div>
    );
  }
}

export default App;
