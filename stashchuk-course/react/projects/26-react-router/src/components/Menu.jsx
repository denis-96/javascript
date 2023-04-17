import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        // className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Menu;
