import "./register.scss";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    axiosInstance.post("/auth/register", data).then((res) => {
      navigate("/login");
      console.log(res).catch((err) => {
        console.log(err.message);
        setErr(err.message);
      });
    });
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          {err && <p>{err}</p>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
