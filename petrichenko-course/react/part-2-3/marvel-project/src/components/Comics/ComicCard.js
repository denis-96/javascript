import { Link } from "react-router-dom";

import "./ComicCard.scss";

function ComicCard({ id, title, price, thumbnail }) {
  const thumbnailStyle = thumbnail.includes("image_not_available")
    ? { objectFit: "unset" }
    : { objectFit: "cover" };
  return (
    <li className="comic__card">
      <Link to={id.toString()}>
        <img
          style={thumbnailStyle}
          src={thumbnail}
          alt="comic"
          className="comic__card-img"
        />
        <div className="comic__card-name">{title}</div>
        <div className="comic__card-price">{price}</div>
      </Link>
    </li>
  );
}

export default ComicCard;
