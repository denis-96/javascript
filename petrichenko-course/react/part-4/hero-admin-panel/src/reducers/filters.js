/*
const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilters: ["all"],
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "FILTERS_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "idle",
      };
    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };
    case "FILTER_ADDED":
      return {
        ...state,
        activeFilters: [...state.activeFilters, action.payload],
      };
    case "FILTER_REMOVED":
      return {
        ...state,
        activeFilters: state.activeFilters.filter(
          (filter) => filter !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default filters;
*/
