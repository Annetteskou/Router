import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Forside</NavLink>
      <NavLink to="/about">Om</NavLink>
      <NavLink to="/contact">Kontakt</NavLink>
    </nav>
  );
}

export default Nav;
