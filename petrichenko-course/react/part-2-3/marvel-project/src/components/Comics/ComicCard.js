import "./ComicCard.scss";

import UW from "../../resources/img/UW.png";
import xMen from "../../resources/img/x-men.png";

function ComicCard({ title, price, imageName }) {
  const images = { UW, xMen };

  return (
    <li className="comic__card">
      <a href="#">
        <img
          src={images?.[imageName]}
          alt="ultimate war"
          className="comic__card-img"
        />
        <div className="comic__card-name">{title}</div>
        <div className="comic__card-price">{price}</div>
      </a>
    </li>
  );
}

export default ComicCard;
