import Search from "./Search";
import Filter from "./Filters";

import "./EmployeesFilterBar.css";

function FilterBar({ changeSearch, changeFilter }) {
  return (
    <div className="filter-bar">
      <Search changeSearch={changeSearch} />
      <Filter changeFilter={changeFilter} />
    </div>
  );
}

export default FilterBar;
