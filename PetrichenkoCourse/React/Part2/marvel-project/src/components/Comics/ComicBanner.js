import "./ComicBanner.scss";

import avengers from "../../resources/img/Avengers.png";
import avengersLogo from "../../resources/img/Avengers_logo.png";

function ComicBanner() {
  return (
    <div className="comic__banner">
      <img src={avengers} alt="Avengers" />
      <div className="comic__banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={avengersLogo} alt="Avengers logo" />
    </div>
  );
}

export default ComicBanner;
