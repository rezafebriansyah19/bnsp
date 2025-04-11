import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    backgroundColor: "#2e86de",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    textDecoration: "none",
  };

  const menuStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: "60px",
    right: "20px",
    backgroundColor: "#2e86de",
    padding: isMobile ? "10px" : 0,
    gap: "15px",
    borderRadius: "8px",
  };

  const getLinkStyle = (path) => ({
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
    borderBottom: location.pathname === path ? "2px solid #fbc531" : "none",
    paddingBottom: "2px",
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>KampusTeknologi</Link>

      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: "22px", cursor: "pointer", color: "#fff" }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      <div style={menuStyle}>
        <Link to="/" style={getLinkStyle("/")} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" style={getLinkStyle("/about")} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/pendaftaran" style={getLinkStyle("/pendaftaran")} onClick={() => setMenuOpen(false)}>Pendaftaran</Link>
        <Link to="/data-pendaftar" style={getLinkStyle("/data-pendaftar")} onClick={() => setMenuOpen(false)}>Data</Link>
      </div>
    </nav>
  );
};

export default Navbar;
