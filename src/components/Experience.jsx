import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const experiences = [
    {
      type: "work",
      title: "Senior Full-Stack Engineer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2024 - Present",
      description: "Leading the development of highly scalable web applications. Architecting microservices and mentoring junior developers.",
      icon: <FaBriefcase className="text-xl" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      type: "internship",
      title: "Software Development Intern",
      company: "Global Tech Solutions",
      duration: "May 2023 - Aug 2023",
      description: "Developed internal tools using React and Node.js. Improved database query performance by 30%.",
      icon: <FaLaptopCode className="text-xl" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "education",
      title: "B.S. in Computer Science",
      company: "University of Technology",
      duration: "2019 - 2023",
      description: "Graduated with Honors. Specialized in Software Engineering and Artificial Intelligence.",
      icon: <FaGraduationCap className="text-xl" />,
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden px-6">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="glow-blob w-[300px] h-[300px] bg-accent-purple top-1/2 left-0 -translate-y-1/2 opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional experience, internships, and educational background.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l border-slate-700/50 ml-4 md:ml-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[20px] top-1 h-10 w-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:border-accent-cyan transition-all duration-300 z-10 bg-gradient-to-br ${exp.color}`}>
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="glass p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-slate-500/50 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b opacity-50 group-hover:opacity-100 transition-opacity duration-300 ${exp.color}"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors">{exp.title}</h3>
                    <h4 className="text-lg text-slate-300 font-medium">{exp.company}</h4>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-800/80 text-sm text-slate-400 font-semibold border border-slate-700 w-max">
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tag denoting type */}
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded-md">
                    {exp.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
