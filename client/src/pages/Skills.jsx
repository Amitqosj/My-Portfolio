import React from "react";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-200">

      {/* Hero */}
      <section className="py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          Technical Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Specialized in backend development with expertise in building scalable, secure, and high-performance applications. Proficient in multiple tech stacks and modern development practices.
        </motion.p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-20">

        <SkillGroup 
          title="Backend Development"
          color="from-blue-500 to-cyan-500"
          proficiency="Expert"
          list={[
            "ASP.NET Core",
            ".NET Framework",
            "Web API",
            "RESTful Services",
            "C#"
          ]}
        />

        <SkillGroup 
          title="Frontend Development"
          color="from-pink-500 to-purple-500"
          proficiency="Advanced"
          list={[
            "React",
            "JavaScript (ES6+)",
            "HTML5 & CSS3",
            "Tailwind CSS",
            "Bootstrap"
          ]}
        />

        <SkillGroup 
          title="Backend & Runtime"
          color="from-teal-500 to-blue-500"
          proficiency="Advanced"
          list={[
            "Node.js",
            "Express.js",
            "API Development",
            "Authentication",
            "Authorization"
          ]}
        />

        <SkillGroup 
          title="Database Management"
          color="from-yellow-500 to-orange-500"
          proficiency="Expert"
          list={[
            "SQL Server",
            "MongoDB",
            "Entity Framework",
            "Query Optimization",
            "Database Design"
          ]}
        />

        <SkillGroup 
          title="DevOps & Tools"
          color="from-green-500 to-teal-500"
          proficiency="Intermediate"
          list={[
            "Git / GitHub",
            "Docker",
            "Postman",
            "VS Code",
            "Visual Studio",
            "CI/CD Pipelines"
          ]}
        />

        <SkillGroup 
          title="Other Technologies"
          color="from-red-500 to-pink-500"
          proficiency="Intermediate"
          list={[
            "Microservices",
            "Cloud Platforms",
            "Security Best Practices",
            "Design Patterns",
            "Agile Methodology"
          ]}
        />

      </section>

      {/* Proficiency Levels */}
      <section className="bg-gray-900/50 py-16 px-6 mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Proficiency Levels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProficiencyCard 
              level="Expert" 
              description="Deep understanding with years of practical experience. Can architect solutions and mentor others."
              color="from-blue-500 to-cyan-500"
            />
            <ProficiencyCard 
              level="Advanced" 
              description="Strong knowledge with significant project experience. Can handle complex requirements independently."
              color="from-indigo-500 to-purple-500"
            />
            <ProficiencyCard 
              level="Intermediate" 
              description="Good working knowledge with practical experience. Capable of delivering quality work with some guidance."
              color="from-pink-500 to-orange-500"
            />
          </div>
        </div>
      </section>

    </div>
  );
};


const SkillGroup = ({ title, list, color, proficiency }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .6 }}
    className="group"
  >
    <div className="flex items-center justify-between mb-6">
      <h2
        className={`text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${color}`}
      >
        {title}
      </h2>
      <span className="text-sm font-semibold px-4 py-1 rounded-full bg-gray-800 text-gray-300">
        {proficiency}
      </span>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-wrap gap-4"
    >
      {list.map((item, i) => (
        <motion.span
          key={i}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex items-center gap-2 bg-gray-900/60 hover:bg-gray-800 rounded-full px-5 py-2 cursor-default shadow-sm hover:shadow-md border border-gray-800 hover:border-gray-700 transition"
        >
          <CheckCircle size={18} className="text-indigo-400" />
          {item}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const ProficiencyCard = ({ level, description, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-indigo-500 transition"
  >
    <div className={`inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-bold`}>
      {level}
    </div>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Skills;
