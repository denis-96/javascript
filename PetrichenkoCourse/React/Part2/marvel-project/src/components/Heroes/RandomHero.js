import Button from "../UI/Button";
import thor from "../../resources/img/thor.jpeg";
import mjolnir from "../../resources/img/mjolnir.png";

import "./RandomHero.scss";

function RandomHero() {
  return (
    <div className="random-hero">
      <div className="random-hero__block">
        <img src={thor} alt="Random character" className="random-hero__img" />
        <div className="random-hero__info">
          <p className="random-hero__name">Thor</p>
          <p className="random-hero__descr">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <div className="random-hero__btns">
            <a href="#">
              <Button type="main" text="homepage" />
            </a>
            <a href="#">
              <Button type="secondary" text="Wiki" />
            </a>
          </div>
        </div>
      </div>
      <div className="random-hero__static">
        <p className="random-hero__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="random-hero__title">Or choose another one</p>
        <Button type="main" text="try it" />
        <img src={mjolnir} alt="mjolnir" className="random-hero__decoration" />
      </div>
    </div>
  );
}

export default RandomHero;
