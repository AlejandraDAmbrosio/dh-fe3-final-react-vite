import React from "react"
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>This is the navbar</h2>
      {/*<NavLink to="/dentists" className={({ isActive }) => (isActive ? activeNavbar : "navbar")}>
        Odontólogos
  </NavLink>*/}
      <ul>
        <li>Odontólogos</li>
        <li>Contacto</li>
        <li>Favoritos</li>
        <li>Modo Oscuro</li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Navbar