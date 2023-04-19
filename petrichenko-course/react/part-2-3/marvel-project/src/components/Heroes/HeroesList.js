import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./HeroesList.scss";

import useMarvelService from "../../services/MarvelService";

import HeroCard from "./HeroCard";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

function HeroesList(props) {
  const [heroes, setHeroes] = useState([]);
  const [offset, setOffset] = useState(210);
  const [allHeroesLoaded, setAllHeroesLoaded] = useState(false);

  const { loading, error, getHeroes } = useMarvelService();

  const updateHeroesList = () => {
    getHeroes(offset).then(onHeroesLoaded);
  };

  useEffect(() => {
    updateHeroesList();
  }, []);

  const onHeroesLoaded = (loadedHeroes) => {
    setHeroes((heroes) => [...heroes, ...loadedHeroes]);
    setOffset((offset) => offset + loadedHeroes.length);
    setAllHeroesLoaded(loadedHeroes.length < 9);
  };

  const { onHeroSelect } = props;
  return (
    <div className="heroes__list">
      {error ? (
        <ErrorMessage />
      ) : (
        <HeroesGrid heroes={heroes} onHeroSelect={onHeroSelect} />
      )}
      {loading && <Spinner />}
      <Button
        style={{ display: allHeroesLoaded ? "none" : "block" }}
        onClick={updateHeroesList}
        disabled={loading}
        text="load more"
        type="main"
        isLong
      />
    </div>
  );
}

function HeroesGrid({ heroes, onHeroSelect }) {
  return (
    <ul className="heroes__grid">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          onClick={() => onHeroSelect(hero.id)}
          thumbnail={hero.thumbnail}
          name={hero.name}
        />
      ))}
    </ul>
  );
}

HeroesList.propTypes = {
  onHeroSelect: PropTypes.func,
  selectedHero: PropTypes.number,
};

export default HeroesList;
