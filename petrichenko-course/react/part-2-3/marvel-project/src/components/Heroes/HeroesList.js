import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import "./HeroesList.scss";

import useMarvelService from "../../services/MarvelService";

import HeroCard from "./HeroCard";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import getContent from "../../utils/getContent";

// const getContent = (process, SucceedComponent) => {
//   switch (process) {
//     case "waiting":
//       return <Spinner />;
//     case "loading":
//       return (
//         <>
//           <SucceedComponent />
//           <Spinner />
//         </>
//       );
//     case "succeeded":
//       return <SucceedComponent />;
//     case "failed":
//       return <ErrorMessage />;
//     default:
//       throw new Error("Unexpected process");
//   }
// };

function HeroesList({ onHeroSelect }) {
  const [heroes, setHeroes] = useState([]);
  const [offset, setOffset] = useState(210);
  const [allHeroesLoaded, setAllHeroesLoaded] = useState(false);

  const { process, succeedProcess, getHeroes } = useMarvelService();

  const updateHeroesList = () => {
    getHeroes(offset).then(onHeroesLoaded).then(succeedProcess);
  };

  const onHeroesLoaded = (loadedHeroes) => {
    setHeroes((heroes) => [...heroes, ...loadedHeroes]);
    setOffset((offset) => offset + loadedHeroes.length);
    setAllHeroesLoaded(loadedHeroes.length < 9);
  };

  useEffect(() => {
    updateHeroesList();
  }, []);

  const componentContent = useMemo(
    () =>
      getContent(
        process,
        () => <HeroesGrid heroes={heroes} onHeroSelect={onHeroSelect} />,
        Spinner,
        () => (
          <>
            <HeroesGrid heroes={heroes} onHeroSelect={onHeroSelect} />
            <Spinner />
          </>
        )
      ),
    [process, heroes]
  );

  return (
    <div className="heroes__list">
      {componentContent}
      <Button
        style={{ display: allHeroesLoaded ? "none" : "block" }}
        onClick={updateHeroesList}
        disabled={process === "loading"}
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
