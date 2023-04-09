import "./EmployeesList.css";
import Employee from "./Employee";

function EmployeesList({ employees }) {
  return (
    <ul className="employees-list list-group">
      {employees.map((employee) => (
        <Employee key={employee.id} {...employee} />
      ))}
    </ul>
  );
}

export default EmployeesList;
