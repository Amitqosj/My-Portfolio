import React from "react";
import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/project" },
    { label: "Contact", to: "/contact" },
  ];

  const getLinkClass = ({ isActive }) =>
    `px-3 md:px-4 py-2 text-sm md:text-base rounded-full font-medium transition ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
        : "text-slate-200 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-5 md:px-8 text-white">
        <NavLink to="/" className="group">
          <div className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide">
            Amit<span className="text-indigo-400 group-hover:text-purple-400 transition">.Portfolio</span>
          </div>
        </NavLink>

        <Motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-1 md:gap-2 rounded-full bg-white/5 p-1.5"
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={getLinkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </Motion.ul>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-sm text-slate-100 hover:bg-white/10 transition"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4 pt-3 bg-slate-950/95">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
