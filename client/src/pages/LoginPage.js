import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../partials/utils/UserContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/forms.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          toast.success("Login verified", {
            onClose: () => navigate("/"),
          });
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
    }
  }

  function createAccount() {
    navigate("/register");
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <h1 className="titlehead">Login</h1>
        <br />
        <div className="user-image-container">
          <img
            alt="User"
            className="user-image"
            src="https://a0.anyrgb.com/pngimg/1140/162/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo-thumbnail.png"
          />
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <br />
        <button className="button-forms" type="submit">
          Login
        </button>
        <div className="create-account-container">
          <p>Don't have an account?</p>
          <button className="register-btn" onClick={createAccount}>
            Create New Account
          </button>
        </div>
      </form>

      {/* Toast Container for displaying success or error messages */}
      <ToastContainer />
    </div>
  );
}
