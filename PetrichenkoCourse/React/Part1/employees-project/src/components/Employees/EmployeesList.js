import Employee from "./Employee";

import "./EmployeesList.css";

function EmployeesList({
  employees,
  deleteEmployeeHandler,
  togglePropHandler,
  changePropHandler,
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
          changeSalary={(newSalary) =>
            changePropHandler(employee.id, "salary", newSalary)
          }
        />
      ))}
    </ul>
  );
}

export default EmployeesList;
