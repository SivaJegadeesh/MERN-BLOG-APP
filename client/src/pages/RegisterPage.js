import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/forms.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    try {
      ev.preventDefault();
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success("Registration successful!", {
          onClose: () => navigate("/login?welcome=true"),
        });
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (e) {
      console.error(e);
      toast.error("Registration failed. Please try again.");
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={register}>
        <h1 className="titlehead">Register</h1>
        <br />
        <div className="user-image-container">
          <img
            src="https://a0.anyrgb.com/pngimg/1140/162/user-profile-login-avatar-heroes-user-blue-icons-circle-symbol-logo-thumbnail.png"
            alt="User"
            className="user-image"
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
        <button className="button-forms register-btn" type="submit">
          Register
        </button>
      </form>

      <div className="create-account-container">
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
}
