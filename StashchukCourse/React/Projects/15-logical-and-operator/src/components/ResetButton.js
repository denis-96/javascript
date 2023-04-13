function ResetButton({onClick}) {
  return (
    <div>
      <button style={{ backgroundColor: "lightcoral" }} onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
