import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);

      // await axios.post("http://localhost:4000/login", inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          name="username"
          placeholder="username.."
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password.."
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>There is an error</p>}
        <span>
          Don't have an account <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
