import Employee from "./Employee";

import "./EmployeesList.css";

function EmployeesList({
  employees,
  deleteEmployeeHandler,
  togglePropHandler,
}) {
  return (
    <ul className="employees-list list-group">
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          deleteHandler={() => deleteEmployeeHandler(employee.id)}
          toggleIncreaseHandler={() =>
            togglePropHandler(employee.id, "increased")
          }
          toggleRiseHandler={() => togglePropHandler(employee.id, "rised")}
          {...employee}
        />
      ))}
    </ul>
  );
}

export default EmployeesList;
