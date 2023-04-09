import Employee from "./Employee";

import "./EmployeesList.css";

function EmployeesList({ employees, deleteEmployeeHandler }) {
  return (
    <ul className="employees-list list-group">
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          deleteHandler={() => deleteEmployeeHandler(employee.id)}
          {...employee}
        />
      ))}
    </ul>
  );
}

export default EmployeesList;
