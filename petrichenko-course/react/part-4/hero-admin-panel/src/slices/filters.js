import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilters: ["all"],
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading";
    },
    filtersFetched: (state, action) => {
      state.filters = action.payload;
      state.filtersLoadingStatus = "idle";
    },
    filtersFetchingError: (state) => {
      state.filtersLoadingStatus = "error";
    },
    filterAdded: (state, action) => {
      state.activeFilters.push(action.payload);
    },
    filterRemoved: (state, action) => {
      state.activeFilters = state.activeFilters.filter(
        (filter) => filter !== action.payload
      );
    },
  },
});

const { actions, reducer } = filters;
export default reducer;
export const {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  filterAdded,
  filterRemoved,
} = actions;
