import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ username: "", password: "" });
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => handleInputChange("username", e.target.value)}
            type="text"
            value={formData.username}
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => handleInputChange("password", e.target.value)}
            type="password"
            value={formData.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
