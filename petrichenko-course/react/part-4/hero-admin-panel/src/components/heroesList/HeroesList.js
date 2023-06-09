import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { fetchHeroes } from "../../actions";
import { heroDeleted } from "../../slices/heroes";
import { useHttp } from "../../hooks/http.hook";

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const heroesSelector = createSelector(
    (state) => state.filters.activeFilters,
    (state) => state.heroes.heroes,
    (activeFilters, heroes) =>
      activeFilters.includes("all")
        ? heroes
        : heroes.filter((hero) => activeFilters.includes(hero.element))
  );
  const heroes = useSelector(heroesSelector);

  const { heroesLoadingStatus } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onHeroDelete = useCallback(
    (id) => {
      request(`http://localhost:3001/heroes/${id}`, "DELETE")
        .then(() => dispatch(heroDeleted(id)))
        .catch((e) => console.log(e));
    },
    [request]
  );
  useEffect(() => {
    dispatch(fetchHeroes(request));
    // eslint-disable-next-line
  }, []);

  // const filteredHeroes = useMemo(() => {
  //   if (activeFilters.includes("all")) {
  //     return [...heroes];
  //   }
  //   return heroes.filter((hero) => activeFilters.includes(hero.element));
  // }, [activeFilters, heroes]);

  const content =
    heroesLoadingStatus === "loading" ? (
      <Spinner />
    ) : heroesLoadingStatus === "error" ? (
      <h5 className="text-center mt-5">Ошибка загрузки</h5>
    ) : !heroes.length ? (
      <h5 className="text-center mt-5">Героев пока нет</h5>
    ) : (
      <ul>
        {heroes.map((hero) => (
          <HeroesListItem
            key={hero.id}
            onDelete={() => onHeroDelete(hero.id)}
            {...hero}
          />
        ))}
      </ul>
    );
  return content;
};

export default HeroesList;
