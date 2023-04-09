import Search from "./Search";
import Filter from "./Filters";

import "./EmployeesFilterBar.css";

function FilterBar() {
  return (
    <div className="filter-bar">
      <Search />
      <Filter />
    </div>
  );
}

export default FilterBar;
