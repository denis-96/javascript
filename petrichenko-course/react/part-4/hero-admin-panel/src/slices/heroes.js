import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const heroesAdaptor = createEntityAdapter();

/*
const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
};
*/

const initialState = heroesAdaptor.getInitialState({
  heroesLoadingStatus: "idle",
});

export const fetchHeroes = createAsyncThunk("heroes/fetchHeroes", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/heroes");
});

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroCreated: (state, action) => {
      heroesAdaptor.addOne(state, action.payload);
    },
    heroDeleted: (state, action) => {
      heroesAdaptor.removeOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.heroesLoadingStatus = "loading";
    });
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.heroesLoadingStatus = "idle";
      heroesAdaptor.setAll(state, action.payload);
    });
    builder.addCase(fetchHeroes.rejected, (state) => {
      state.heroesLoadingStatus = "error";
    });
    builder.addDefaultCase(() => {});
  },
});

const { actions, reducer } = heroesSlice;

export default reducer;

export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  heroCreated,
  heroDeleted,
} = actions;

const { selectAll } = heroesAdaptor.getSelectors((state) => state.heroes);

export const heroesSelector = createSelector(
  (state) => state.filters.activeFilters,
  selectAll,
  (activeFilters, heroes) =>
    activeFilters.includes("all")
      ? heroes
      : heroes.filter((hero) => activeFilters.includes(hero.element))
);
