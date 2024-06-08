import "./login.scss";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {updateUser} = useContext(AuthContext)

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);
      const formData = new FormData(e.target);
      const data = {
        username: formData.get("username"),
        password: formData.get("password"),
      };
      axiosInstance
        .post("/auth/login", data , {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          updateUser(res.data.data);
          navigate("/");

        })
        .catch((err) => {
          console.log(err)
          setError(err.message);
        }).finally(()=>{
          setIsLoading(false);
        });
    };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error && <span>Invaild credential</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
