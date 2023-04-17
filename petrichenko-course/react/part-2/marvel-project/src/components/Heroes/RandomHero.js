import { Component } from "react";

import "./RandomHero.scss";

import mjolnir from "../../resources/img/mjolnir.png";

import MarvelService from "../../services/MarvelService";

import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

class RandomHero extends Component {
  state = {
    hero: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateHero();
    // this.intervalId = setInterval(this.updateHero, 3000);
  }

  componentWillUnmount() {
    // clearInterval(this.intervalId);
  }

  onHeroLoaded = (hero) => {
    this.setState({ hero, loading: false });
  };

  onHeroLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateHero = () => {
    this.onHeroLoading();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.marvelService.getHero(id).then(this.onHeroLoaded).catch(this.onError);
  };

  render() {
    const { hero, loading, error } = this.state;
    return (
      <div className="random-hero">
        {error ? (
          <ErrorMessage />
        ) : loading ? (
          <Spinner />
        ) : (
          <RandomHeroBlock hero={hero} />
        )}
        <div className="random-hero__static">
          <p className="random-hero__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="random-hero__title">Or choose another one</p>
          <Button onClick={this.updateHero} type="main" text="try it" />
          <img
            src={mjolnir}
            alt="mjolnir"
            className="random-hero__decoration"
          />
        </div>
      </div>
    );
  }
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
