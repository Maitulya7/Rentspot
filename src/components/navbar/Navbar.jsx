import "./navbar.scss";

const Navbar = () => {
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
        <a href="/sign-up" className="register">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
