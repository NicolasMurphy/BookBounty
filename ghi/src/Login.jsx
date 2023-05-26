import { useState } from "react";
import { useLoginMutation } from "./app/apiSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card text-bg-light mb-3 txt">
      <h5 className="card-header">Login</h5>
      <div className="card-body">
        <form onSubmit={(event) => {event.preventDefault(); login({username, password}); navigate("/");}}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              name="username"
              type="text"
              className="form-control bg-white dark:bg-black"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              name="password"
              type="password"
              className="form-control bg-white dark:bg-black"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
