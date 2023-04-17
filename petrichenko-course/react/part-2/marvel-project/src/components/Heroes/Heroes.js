import { Component } from "react";

import "./Heroes.scss";

import RandomHero from "./RandomHero";
import HeroesList from "./HeroesList";
import HeroInfo from "./HeroInfo";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";

class Heroes extends Component {
  state = {
    selectedHero: null,
  };

  onHeroSelect = (id) => {
    this.setState({ selectedHero: id });
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <RandomHero />
        </ErrorBoundary>
        <div className="heroes__container">
          <ErrorBoundary>
            <HeroesList onHeroSelect={this.onHeroSelect} />
          </ErrorBoundary>
          <ErrorBoundary>
            <HeroInfo heroId={this.state.selectedHero} />
          </ErrorBoundary>
        </div>
      </>
    );
  }
}

export default Heroes;
