import "./Skeleton.scss";

function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__pulse skeleton__header">
        <div className="skeleton__pulse skeleton__circle"></div>
        <div className="skeleton__pulse skeleton__mini"></div>
      </div>
      <div className="skeleton__pulse skeleton__block"></div>
      <div className="skeleton__pulse skeleton__block"></div>
      <div className="skeleton__pulse skeleton__block"></div>
    </div>
  );
}

export default Skeleton;
