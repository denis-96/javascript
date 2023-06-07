// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useDispatch, useSelector } from "react-redux";

import { filterAdded, filterRemoved } from "../../actions";

import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
  const filters = useSelector((state) => state.filters.filters);
  const activeFilters = useSelector((state) => state.filters.activeFilters);
  const dispatch = useDispatch();

  const onFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      dispatch(filterRemoved(filter));
    } else {
      if (filter !== "all" && activeFilters.includes("all")) {
        dispatch(filterRemoved("all"));
      }
      dispatch(filterAdded(filter));
    }
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.length ? (
            filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterClick(filter.id)}
                className={`btn btn-${filter.color}${
                  activeFilters.includes(filter.id) ? " active" : ""
                }`}
              >
                {filter.title}
              </button>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
