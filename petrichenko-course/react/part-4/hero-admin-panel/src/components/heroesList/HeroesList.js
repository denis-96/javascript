import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { useGetHeroesQuery, useDeleteHeroMutation } from "../../api/apiSlice";

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const { data: heroes = [], isLoading, isError } = useGetHeroesQuery();

  const activeFilters = useSelector((state) => state.filters.activeFilters);

  const filteredHeroes = useMemo(
    () =>
      activeFilters.includes("all")
        ? [...heroes]
        : heroes.filter((hero) => activeFilters.includes(hero.element)),
    [activeFilters, heroes]
  );

  const [deleteHero] = useDeleteHeroMutation();

  const onHeroDelete = useCallback((id) => {
    deleteHero(id);
  }, []);

  const content = isLoading ? (
    <Spinner />
  ) : isError ? (
    <h5 className="text-center mt-5">Ошибка загрузки</h5>
  ) : !filteredHeroes.length ? (
    <h5 className="text-center mt-5">Героев пока нет</h5>
  ) : (
    <ul>
      {filteredHeroes.map((hero) => (
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
