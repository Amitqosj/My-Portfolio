import React from "react";
import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Header = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/project" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl shadow-xl">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 md:px-8 text-white">
        <NavLink to="/" className="group">
          <div className="text-xl md:text-2xl font-extrabold tracking-wide">
            Amit<span className="text-indigo-400 group-hover:text-purple-400 transition">.Portfolio</span>
          </div>
        </NavLink>

        <Motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 md:gap-2 rounded-full bg-white/5 p-1.5"
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 md:px-4 py-2 text-sm md:text-base rounded-full font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </Motion.ul>
      </nav>
    </header>
  );
};

export default Header;
