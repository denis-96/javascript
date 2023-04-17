import { Component, createRef } from "react";

import "./HeroCard.scss";

class HeroCard extends Component {
  cardRef = createRef();

  onFocus = () => {
    this.cardRef.current.click();
  };

  render() {
    const { name, thumbnail } = this.props;

    const thumbnailStyle = thumbnail.includes("image_not_available")
      ? { objectFit: "unset" }
      : { objectFit: "cover" };
    return (
      <li
        className="hero__card"
        onClick={this.props.onClick}
        onFocus={this.onFocus}
        tabIndex={0}
        ref={this.cardRef}
      >
        <img style={thumbnailStyle} src={thumbnail} alt="abyss" />
        <div className="hero__card__name">{name}</div>
      </li>
    );
  }
}

export default HeroCard;
