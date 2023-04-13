import Search from "./Search";
import Filter from "./Filters";

import "./EmployeesFilterBar.css";

function FilterBar({ changeSearch, changeFilter, currentFilter, filters }) {
  return (
    <div className="filter-bar">
      <Search changeSearch={changeSearch} />
      <Filter
        changeFilter={changeFilter}
        currentFilter={currentFilter}
        filters={filters}
      />
    </div>
  );
}

export default FilterBar;
