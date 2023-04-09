import "./App.css";
import Info from "./components/Info/Info";
import FilterBar from "./components/Employees/EmployeesFilterBar";
import EmployeesList from "./components/Employees/EmployeesList";
import EmployeeAddForm from "./components/Employees/EmployeeAddForm";

function App() {
  const employees = [
    { id: 1, name: "John C.", salary: 800, increased: false },
    { id: 2, name: "Alex M.", salary: 3000, increased: true },
    { id: 3, name: "Carl W.", salary: 5000, increased: false },
  ];

  return (
    <div className="app">
      <Info />
      <FilterBar />
      <EmployeesList employees={employees} />
      <EmployeeAddForm />
    </div>
  );
}

export default App;
