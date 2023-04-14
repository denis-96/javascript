import { Component } from "react";

import "./HeroCard.scss";

class HeroCard extends Component {
  state = {
    selected: false,
  };

  onClick = () => {
    this.setState(({ selected }) => ({ selected: !selected }));
    this.props.onClick();
  };

  render() {
    const { name, thumbnail } = this.props;

    const heroClass = `hero__card ${
      this.state.selected ? "hero__card_selected" : ""
    }`;
    const thumbnailStyle = thumbnail.includes("image_not_available")
      ? { objectFit: "unset" }
      : { objectFit: "cover" };
    return (
      <li className={heroClass} onClick={this.onClick}>
        <img style={thumbnailStyle} src={thumbnail} alt="abyss" />
        <div className="hero__card__name">{name}</div>
      </li>
    );
  }
}

export default HeroCard;
