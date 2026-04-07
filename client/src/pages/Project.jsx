import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from "framer-motion";

const projectsData = [
  
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features include smooth navigation, theme switching, and a fully functional contact form. Showcases projects, skills, and professional experience in an elegant design.",
    image: "https://i.ytimg.com/vi/nuJFjx44ILM/maxresdefault.jpg",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://amit-thakur-portfolio.onrender.com/",
  },
  


 {
  title: "Premium Ride Next",
  description: "A sophisticated ride-sharing platform designed for comfort, speed, and reliability. Built with modern technologies including React for frontend and ASP.NET Core for backend. Features real-time ride tracking, secure payment integration, and user authentication.",
  image: "https://repository-images.githubusercontent.com/356916985/cebcbf05-cf6a-4e55-9f28-a08d3c061919",
  tags: ["React", "ASP.NET Core", "MongoDB"],
  link: "https://premiumridenext.netlify.app/"
},

{
  title: "Car Rental System",
  description: "A comprehensive car rental management platform that handles vehicle bookings, customer information, and rental transactions efficiently. Allows users to search, reserve, and return cars while enabling administrators to track fleet availability, pricing, and rental history. Features include automated billing, inventory management, and reporting.",
  image: "https://images-workbench.99static.com/usDofBfV5IUdUo9rWKggPOFxdPA=/http://s3.amazonaws.com/projects-files/66/6629/662901/57f19a7f-e2ad-4b8a-b3e2-dbda5f3dce62.jpg",
  tags: [".NET Core", "SQL Server", "React"],
  link: "https://premiumridenext.netlify.app/"
}



];

const Project = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="px-6 py-20 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <Motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1 text-sm text-indigo-300 mb-5"
          >
            Selected Work
          </Motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Projects That Show My Expertise</h1>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of practical products built with strong backend architecture, polished frontend experiences,
            and real-world problem solving. I can add more projects here anytime as you share links later.
          </p>
        </Motion.div>
      </section>

      <section className="py-6 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20 transition duration-300 flex flex-col"
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-indigo-300 mb-2">{project.title}</h3>
              <p className="mb-4 text-slate-300 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition"
              >
                View Project →
              </a>
            </div>
          </Motion.div>
        ))}
      </section>

      <section className="px-6 py-20">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-3xl border border-indigo-400/20 bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-indigo-600/30 p-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-base md:text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            I am open to backend or full-stack opportunities and freelance projects. Let us discuss how I can help build your next product.
          </p>
          <Motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="inline-flex">
            <Link to="/contact" className="inline-flex px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-slate-100 transition">
            Contact Us
            </Link>
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  );
};

export default Project;
