import "./EmployeesFilterBar.css";
import Search from "./Search";
import Filter from "./Filters";

function FilterBar() {
  return (
    <div className="filter-bar">
      <Search />
      <Filter />
    </div>
  );
}

export default FilterBar;
