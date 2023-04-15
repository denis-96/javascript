import { Component } from "react";

import "./HeroCard.scss";

class HeroCard extends Component {
  render() {
    const { name, thumbnail, selected } = this.props;

    const heroClass = `hero__card ${selected ? "hero__card_selected" : ""}`;
    const thumbnailStyle = thumbnail.includes("image_not_available")
      ? { objectFit: "unset" }
      : { objectFit: "cover" };
    return (
      <li className={heroClass} onClick={this.props.onClick}>
        <img style={thumbnailStyle} src={thumbnail} alt="abyss" />
        <div className="hero__card__name">{name}</div>
      </li>
    );
  }
}

export default HeroCard;
