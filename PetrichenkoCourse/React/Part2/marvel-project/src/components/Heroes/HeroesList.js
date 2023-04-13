import "./HeroesList.scss";

import HeroCard from "./HeroCard";
import Button from "../UI/Button";

function HeroesList() {
  return (
    <div className="heroes__list">
      <ul className="heroes__grid">
        <HeroCard selected />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </ul>
      <Button text="load more" type="main" isLong />
    </div>
  );
}

export default HeroesList;
