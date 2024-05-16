import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>RentSpot</span>
        </a>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/sign-in">Sing In</a>
        <a href="/sign-up" className="register">
          Sign Up
        </a>
        <div className={open ? "menuItem active" : "menuItem"}>
          <img
            src="./menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/sign-in">Sing In</a>
          <a href="/sign-up" className="register">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
