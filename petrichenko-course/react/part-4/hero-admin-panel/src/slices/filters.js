import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilters: ["all"],
};

export const fetchFilters = createAsyncThunk("filters/fetchFilters", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/filters");
});

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterAdded: (state, action) => {
      state.activeFilters.push(action.payload);
    },
    filterRemoved: (state, action) => {
      state.activeFilters = state.activeFilters.filter(
        (filter) => filter !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.pending, (state) => {
      state.filtersLoadingStatus = "loading";
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload;
      state.filtersLoadingStatus = "idle";
    });
    builder.addCase(fetchFilters.rejected, (state) => {
      state.filtersLoadingStatus = "error";
    });
    builder.addDefaultCase(() => {});
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
