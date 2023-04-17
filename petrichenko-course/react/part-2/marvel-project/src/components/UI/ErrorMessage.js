import "./ErrorMessage.scss";

import errorGif from "./assets/Error.gif";

function ErrorMessage() {
  return (
    // <img src={process.env.PUBLIC_URL + '/error.gif'} alt="error gif" />
    <img className="error-message" src={errorGif} alt="error gif" />
  );
}

export default ErrorMessage;
