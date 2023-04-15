import { Component } from "react";
import PropTypes from "prop-types";

import "./HeroInfo.scss";

import MarvelService from "../../services/MarvelService";

import Button from "../UI/Button";
import Skeleton from "../UI/Skeleton";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

class HeroInfo extends Component {
  state = {
    hero: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateHeroInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.heroId !== prevProps.heroId) {
      this.updateHeroInfo();
    }
  }

  onLoaded = (hero) => {
    this.setState({ hero, loading: false });
  };

  onLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateHeroInfo = () => {
    const { heroId } = this.props;
    if (!heroId) return;

    this.onLoading();

    this.marvelService.getHero(heroId).then(this.onLoaded).catch(this.onError);
  };

  render() {
    const { hero, loading, error } = this.state;

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
