import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Navbar() {
  function NavBarStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  }
  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink to="/" style={NavBarStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={NavBarStyles}>
        About
      </NavLink>
      <NavLink to="/products" style={NavBarStyles}>
        Products
      </NavLink>
      <NavLink to="/profile" style={NavBarStyles}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={NavBarStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
