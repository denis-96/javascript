import { Component } from "react";
import PropTypes from "prop-types";

import "./HeroesList.scss";

import MarvelService from "../../services/MarvelService";

import HeroCard from "./HeroCard";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

class HeroesList extends Component {
  state = {
    heroes: [],
    loading: true,
    error: false,
    offset: 210,
    allHeroesLoaded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateHeroesList();
  }

  onHeroesLoaded = (loadedHeroes) => {
    this.setState(({ heroes, offset }) => ({
      heroes: [...heroes, ...loadedHeroes],
      loading: false,
      offset: offset + loadedHeroes.length,
      allHeroesLoaded: loadedHeroes.length < 9,
    }));
  };

  onHeroesLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateHeroesList = () => {
    this.onHeroesLoading();
    this.marvelService
      .getHeroes(9, this.state.offset)
      .then(this.onHeroesLoaded)
      .catch(this.onError);
  };

  render() {
    const { heroes, loading, error, allHeroesLoaded } = this.state;
    const { onHeroSelect, selectedHero } = this.props;
    return (
      <div className="heroes__list">
        {error ? (
          <ErrorMessage />
        ) : (
          <HeroesGrid
            heroes={heroes}
            onHeroSelect={onHeroSelect}
            selectedHero={selectedHero}
          />
        )}
        {loading && <Spinner />}
        <Button
          style={{ display: allHeroesLoaded ? "none" : "block" }}
          onClick={this.updateHeroesList}
          disabled={loading}
          text="load more"
          type="main"
          isLong
        />
      </div>
    );
  }
}

function HeroesGrid({ heroes, onHeroSelect, selectedHero }) {
  return (
    <ul className="heroes__grid">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          onClick={() => onHeroSelect(hero.id)}
          {...hero}
          selected={selectedHero === hero.id}
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
