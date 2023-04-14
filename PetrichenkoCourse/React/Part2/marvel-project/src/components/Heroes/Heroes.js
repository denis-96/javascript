import { Component } from "react";

import "./Heroes.scss";

import RandomHero from "./RandomHero";
import HeroesList from "./HeroesList";
import HeroInfo from "./HeroInfo";

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
        <RandomHero />
        <div className="heroes__container">
          <HeroesList onHeroSelect={this.onHeroSelect} />
          <HeroInfo heroId={this.state.selectedHero} />
        </div>
      </>
    );
  }
}

export default Heroes;
