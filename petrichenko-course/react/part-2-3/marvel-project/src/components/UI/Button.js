import "./Buttons.scss";

function Button({ text, type, isLong, ...props }) {
  const buttonClass = `button ${
    type === "main"
      ? "button__main"
      : type === "secondary"
      ? "button__secondary"
      : ""
  } ${isLong ? "button__long" : ""}`;
  return (
    <button {...props} className={buttonClass}>
      <div className="button__inner">{text}</div>
    </button>
  );
}

export default Button;
