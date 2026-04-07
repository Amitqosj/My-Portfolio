import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 mb-8">
          <Motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h3 className="text-white text-lg font-bold mb-3">About</h3>
            <p className="text-sm leading-6">
              Backend developer focused on building secure, scalable applications with clean architecture and modern UX.
            </p>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h3 className="text-white text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/skills" className="hover:text-white transition">Skills</Link></li>
              <li><Link to="/project" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h3 className="text-white text-lg font-bold mb-3">Connect With Me</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-indigo-600 text-white flex items-center justify-center transition text-sm font-bold">GH</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition text-sm font-bold">in</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-500 text-white flex items-center justify-center transition text-sm font-bold">X</a>
              <a href="mailto:amit@example.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition text-sm font-bold">@</a>
            </div>
          </Motion.div>
        </div>

        <hr className="border-white/10 my-6" />

        <p className="text-sm tracking-wide text-slate-300">
          © {new Date().getFullYear()} Amit Thakur. All rights reserved.
        </p>

        <p className="text-xs mt-2">
          Built with React, Tailwind CSS, and modern web technologies.
        </p>

        <p className="text-xs mt-2 text-slate-500">
          Designed and developed by Amit Thakur | Backend Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
