import ErrorMessage from "../components/UI/ErrorMessage";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Page doesn't exist
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "24px",
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
}

export default NotFound;
