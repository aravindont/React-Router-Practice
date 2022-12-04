import { NavLink } from "react-router-dom";

function Navbar() {
  function NavBarStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  }
  return (
    <nav>
      <NavLink to="/" style={NavBarStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={NavBarStyles}>
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
