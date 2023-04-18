import { useRef } from "react";

import "./HeroCard.scss";

function HeroCard(props) {
  const cardRef = useRef(null);

  const onFocus = () => {
    cardRef.current.click();
  };

  const { name, thumbnail, onClick } = props;

  const thumbnailStyle = thumbnail.includes("image_not_available")
    ? { objectFit: "unset" }
    : { objectFit: "cover" };
  return (
    <li
      className="hero__card"
      onClick={onClick}
      onFocus={onFocus}
      tabIndex={0}
      ref={cardRef}
    >
      <img style={thumbnailStyle} src={thumbnail} alt="abyss" />
      <div className="hero__card__name">{name}</div>
    </li>
  );
}

export default HeroCard;
