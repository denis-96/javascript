import "./HeroCard.scss";

import abyss from "../../resources/img/abyss.jpg";

function HeroCard({ selected }) {
  const heroClass = `hero__card ${selected ? "hero__card_selected" : ""}`;
  return (
    <li className={heroClass}>
      <img src={abyss} alt="abyss" />
      <div className="hero__card__name">Abyss</div>
    </li>
  );
}

export default HeroCard;
