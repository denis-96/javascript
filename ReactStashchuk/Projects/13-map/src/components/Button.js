function Button({children, onClick}) {
  console.log("Button rendered");
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
