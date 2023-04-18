import { useState } from "react";

import "./Heroes.scss";

import RandomHero from "./RandomHero";
import HeroesList from "./HeroesList";
import HeroInfo from "./HeroInfo";
import ErrorBoundary from "../ErrorBoundaries/ErrorBoundary";

function Heroes() {
  const [selectedHero, setSelectedHero] = useState(null);

  const onHeroSelect = (id) => {
    setSelectedHero(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomHero />
      </ErrorBoundary>
      <div className="heroes__container">
        <ErrorBoundary>
          <HeroesList onHeroSelect={onHeroSelect} />
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroInfo heroId={selectedHero} />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default Heroes;
