import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./HeroInfo.scss";

import useMarvelService from "../../services/MarvelService";

import Button from "../UI/Button";
import Skeleton from "../UI/Skeleton";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

function HeroInfo({ heroId }) {
  const [hero, setHero] = useState(null);

  const { loading, error, getHero, clearError } = useMarvelService();

  const updateHeroInfo = () => {
    if (!heroId) return;
    clearError();
    getHero(heroId).then((hero) => {
      setHero(hero);
    });
  };

  useEffect(() => {
    updateHeroInfo();
  }, [heroId]);

  return (
    <div className="hero__info">
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : hero ? (
        <View hero={hero} />
      ) : (
        <HeroInfoSkeleton />
      )}
    </div>
  );
}

function View({ hero }) {
  const { name, description, thumbnail, homepage, wiki, comics } = hero;

  const thumbnailStyle = thumbnail.includes("image_not_available")
    ? { objectFit: "contain" }
    : { objectFit: "cover" };

  return (
    <>
      <div className="hero__basics">
        <img style={thumbnailStyle} src={thumbnail} alt={name} />
        <div>
          <div className="hero__info-name">{name}</div>
          <div className="hero__btns">
            <a href={homepage}>
              <Button text="homepage" type="main" />
            </a>
            <a href={wiki}>
              <Button text="wiki" type="secondary" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__descr">{description}</div>
      <div className="hero__comics">Comics:</div>
      <ul className="hero__comics-list">
        {comics.length > 0
          ? comics.slice(0, 10).map((comic, i) => (
              <li key={i} className="hero__comics-item">
                {comic.name}
              </li>
            ))
          : "There is no comics with this character"}
      </ul>
    </>
  );
}

function HeroInfoSkeleton() {
  return (
    <>
      <p className="hero__select">Please select a hero to see information</p>
      <Skeleton />
    </>
  );
}

HeroInfo.propTypes = {
  heroId: PropTypes.number,
};

export default HeroInfo;
