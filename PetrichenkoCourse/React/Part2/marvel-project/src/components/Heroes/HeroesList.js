import { Component } from "react";

import "./HeroesList.scss";

import MarvelService from "../../services/MarvelService";

import HeroCard from "./HeroCard";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

class HeroesList extends Component {
  state = { heroes: [], loading: true, error: false, offset: 0 };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateHeroesList();
  }

  onHeroesLoaded = (loadedHeroes) => {
    this.setState(({ heroes, offset }) => ({
      heroes: [...heroes, ...loadedHeroes],
      loading: false,
      offset: offset + loadedHeroes.length,
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
      .getHeroes(this.state.offset, 9)
      .then(this.onHeroesLoaded)
      .catch(this.onError);
  };

  render() {
    const { heroes, loading, error } = this.state;
    const { onHeroSelect } = this.props;
    return (
      <div className="heroes__list">
        {error ? (
          <ErrorMessage />
        ) : (
          <HeroesGrid heroes={heroes} onHeroSelect={onHeroSelect} />
        )}
        {loading && <Spinner />}
        <Button
          onClick={this.updateHeroesList}
          text="load more"
          type="main"
          isLong
        />
      </div>
    );
  }
}

function HeroesGrid({ heroes, onHeroSelect }) {
  return (
    <ul className="heroes__grid">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          onClick={() => onHeroSelect(hero.id)}
          {...hero}
        />
      ))}
    </ul>
  );
}

export default HeroesList;
