import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from "framer-motion";

const About = () => {
  const navigate=useNavigate();

  const gotocontact= ()=>{
    navigate("/contact");
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-indigo-600 text-white py-20 px-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl max-w-2xl mx-auto">
          I'm a passionate Backend Developer dedicated to building secure, scalable, and efficient applications. Learn more about my journey, expertise, and what drives me.
        </p>
      </Motion.section>

      {/* About Content */}
      <section className="py-20 px-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <Motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <img
            src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg"
            alt="About"
            className="rounded-xl shadow-lg"
          />
        </Motion.div>

        {/* Text */}
        <Motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-indigo-600">Who I Am</h2>
          <p>
            I am a dedicated Backend Developer with strong expertise in building scalable, secure, and high-performance server-side applications. With experience in .NET Core, ASP.NET, and Node.js, I specialize in designing robust APIs, optimizing database structures, and ensuring seamless system integration.
          </p>
          <p>
            I have a passion for clean code architecture, security best practices, and creating efficient solutions that solve real-world problems. My experience spans from designing REST APIs and implementing complex business logic to database optimization and cloud deployment. I'm committed to continuous learning and staying updated with the latest backend technologies and industry practices.
          </p>
          <p>
            Beyond coding, I believe in writing maintainable, well-documented code that my team can build upon. I'm eager to contribute to innovative projects where I can make a meaningful impact while growing as a developer.
          </p>
          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-500 transition"
            onClick={gotocontact}
          >
            Contact Me
          </Motion.button>
        </Motion.div>
      </section>

      {/* Education & Experience Section */}
      <section className="bg-white py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800">Bachelor of Technology</h3>
                <p className="text-indigo-600 font-semibold">Computer Science Engineering</p>
                <p className="text-gray-600 text-sm">2020 - 2024</p>
                <p className="text-gray-700 mt-2">Pursued advanced coursework in databases, system design, and software engineering principles.</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800">Online Certifications</h3>
                <p className="text-indigo-600 font-semibold">Full-Stack Web Development</p>
                <p className="text-gray-600 text-sm">Ongoing</p>
                <p className="text-gray-700 mt-2">Completed multiple courses in .NET Core, React, and cloud technologies from industry-leading platforms.</p>
              </div>
            </div>
          </Motion.div>

          {/* Experience */}
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800">Backend Developer</h3>
                <p className="text-indigo-600 font-semibold">Professional Experience</p>
                <p className="text-gray-600 text-sm">2023 - Present</p>
                <p className="text-gray-700 mt-2">Designed and implemented RESTful APIs, optimized database queries, and developed features for production applications.</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-800">Freelance Developer</h3>
                <p className="text-indigo-600 font-semibold">Full-Stack Solutions</p>
                <p className="text-gray-600 text-sm">2022 - Present</p>
                <p className="text-gray-700 mt-2">Built end-to-end web applications for clients, delivering scalable solutions with modern tech stacks.</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">Core Competencies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-3">Backend Development</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ .NET Core & ASP.NET</li>
              <li>✓ Node.js & Express.js</li>
              <li>✓ REST API Design</li>
              <li>✓ Microservices Architecture</li>
            </ul>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-3">Database & Storage</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ SQL Server</li>
              <li>✓ MongoDB</li>
              <li>✓ Entity Framework</li>
              <li>✓ Query Optimization</li>
            </ul>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-indigo-600 mb-3">Tools & DevOps</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Git & GitHub</li>
              <li>✓ Docker</li>
              <li>✓ Cloud Deployment</li>
              <li>✓ CI/CD Pipelines</li>
            </ul>
          </Motion.div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="bg-indigo-600 text-white py-16 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Download my resume to learn more about my experience, or get in touch to discuss how I can help with your project.
        </p>
        <div className="flex justify-center">
          <button onClick={gotocontact} className="px-8 py-3 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-400 transition border-2 border-white">
            💬 Contact Me
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
