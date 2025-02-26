import imgLogo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import "../Styles/MyNavbar.css";
import Loca from "../assets/Loca";
const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Alternar el submenú de "Soluciones"
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".submenu-container")) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Menú Hamburguesa */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Logo */}
      <div className="logo">
        <img src={imgLogo} alt="Logo" />
        <span className="nav-title">Consultores</span>
      </div>

      {/* Menú de navegación */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="submenu-container">
          <button className="submenu-btn" onClick={toggleSubmenu}>
            Soluciones ▾
          </button>
          {submenuOpen && (
            <ul className="submenu">
              <li>
                <a href="#">Opción 1</a>
              </li>
              <li>
                <a href="#">Opción 2</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">Alianzas</a>
        </li>
        <li>
          <a href="#">Compañía</a>
        </li>
        <li>
          <a href="#">Comunidad</a>
        </li>
      </ul>

      {/* Botón explorar */}
      <button className="button">
        <Loca />
        <div>Explorar mapa</div>
      </button>
    </nav>
  );
};

export default MyNavbar;
