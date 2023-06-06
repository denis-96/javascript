import { useEffect, useState } from "react";

import "./RandomHero.scss";

import mjolnir from "../../resources/img/mjolnir.png";

import useMarvelService from "../../services/MarvelService";

import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import getContent from "../../utils/getContent";

function RandomHero() {
  const [hero, setHero] = useState(null);

  const { process, succeedProcess, getHero, clearError } = useMarvelService();

  const onHeroLoaded = (hero) => {
    setHero(hero);
  };

  const updateHero = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getHero(id).then(onHeroLoaded).then(succeedProcess);
  };

  useEffect(() => {
    updateHero();
    // const intervalId = setInterval(updateHero, 5000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="random-hero">
      {getContent(
        process,
        () => (
          <RandomHeroBlock hero={hero} />
        ),
        Spinner
      )}
      <div className="random-hero__static">
        <p className="random-hero__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="random-hero__title">Or choose another one</p>
        <Button onClick={updateHero} type="main" text="try it" />
        <img src={mjolnir} alt="mjolnir" className="random-hero__decoration" />
      </div>
    </div>
  );
}

function RandomHeroBlock({ hero }) {
  const { name, description, thumbnail, homepage, wiki } = hero;
  const thumbnailStyle = thumbnail.includes("image_not_available")
    ? { objectFit: "contain" }
    : { objectFit: "cover" };
  return (
    <div className="random-hero__block">
      <img
        style={thumbnailStyle}
        src={thumbnail}
        alt="Random character"
        className="random-hero__img"
      />
      <div className="random-hero__info">
        <p className="random-hero__name">{name}</p>
        <p className="random-hero__descr">{description}</p>
        <div className="random-hero__btns">
          <a href={homepage}>
            <Button type="main" text="homepage" />
          </a>
          <a href={wiki}>
            <Button type="secondary" text="wiki" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RandomHero;
