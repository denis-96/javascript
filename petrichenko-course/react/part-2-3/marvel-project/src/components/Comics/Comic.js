import { Link } from "react-router-dom";

import "./Comic.scss";

function Comic({ thumbnail, title, description, pageCount, language, price }) {
  const thumbnailStyle = thumbnail.includes("image_not_available")
    ? { objectFit: "unset" }
    : { objectFit: "cover" };
  return (
    <div className="comic">
      <img
        style={thumbnailStyle}
        src={thumbnail}
        alt="comic"
        className="comic__img"
      />
      <div className="comic__info">
        <h2 className="comic__name">{title}</h2>
        <p className="comic__descr">{description}</p>
        <p className="comic__descr">{pageCount}</p>
        <p className="comic__descr">Language: {language}</p>
        <div className="comic__price">{price}</div>
      </div>
      <Link to="/comics" className="comic__back">
        Back to all
      </Link>
    </div>
  );
}

export default Comic;
