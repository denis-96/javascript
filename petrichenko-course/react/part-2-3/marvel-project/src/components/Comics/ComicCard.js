import "./ComicCard.scss";

function ComicCard({ title, price, thumbnail }) {
  const thumbnailStyle = thumbnail.includes("image_not_available")
    ? { objectFit: "unset" }
    : { objectFit: "cover" };
  return (
    <li className="comic__card">
      <a href="#">
        <img
          style={thumbnailStyle}
          src={thumbnail}
          alt="comic image"
          className="comic__card-img"
        />
        <div className="comic__card-name">{title}</div>
        <div className="comic__card-price">{price}</div>
      </a>
    </li>
  );
}

export default ComicCard;
