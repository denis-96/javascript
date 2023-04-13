import "./Heroes.scss";

import RandomHero from "./RandomHero";
import HeroesList from "./HeroesList";
import HeroInfo from "./HeroInfo";

function Heroes() {
  return (
    <>
      <RandomHero />
      <div className="heroes__container">
        <HeroesList />
        <HeroInfo />
      </div>
    </>
  );
}

export default Heroes;
