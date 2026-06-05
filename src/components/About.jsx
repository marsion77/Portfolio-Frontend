import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaHtml5, FaCss3Alt, FaPython, FaSass } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiDocker, SiExpress, SiDjango, SiMysql, SiBootstrap, SiFirebase } from 'react-icons/si';

const About = () => {
  const containerRef = useRef(null);

  // Scroll logic for 3D perspective transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate 3D rotations based on scroll
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#e34f26] w-7 h-7" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572b6] w-7 h-7" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e] w-7 h-7" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178c6] w-7 h-7" /> },
    { name: 'React', icon: <FaReact className="text-[#61dafb] w-7 h-7" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] w-7 h-7" /> },
    { name: 'Express', icon: <SiExpress className="text-[#eeeeee] w-7 h-7" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248] w-7 h-7" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776ab] w-7 h-7" /> },
    { name: 'Django', icon: <SiDjango className="text-[#44b78b] w-7 h-7" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479a1] w-7 h-7" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952b3] w-7 h-7" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06b6d4] w-7 h-7" /> },
    { name: 'Sass', icon: <FaSass className="text-[#cc6699] w-7 h-7" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28] w-7 h-7" /> },
    { name: 'Git', icon: <FaGitAlt className="text-[#f05032] w-7 h-7" /> },
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-24 px-6 flex items-center justify-center bg-background overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Background glow overlay */}
      <div className="glow-blob w-[350px] h-[350px] bg-accent-purple top-[10%] right-[10%] opacity-10" />
      <div className="glow-blob w-[350px] h-[350px] bg-accent-cyan bottom-[10%] left-[10%] opacity-10" />

      <motion.div 
        style={{ rotateX, scale, opacity }}
        className="w-full max-w-6xl glass rounded-3xl p-8 md:p-16 relative z-10 shadow-2xl flex flex-col gap-12"
      >
        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <span className="text-accent-cyan text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Designing digital blueprints that breed reality.
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-accent-cyan to-accent-purple mt-2" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-200 font-light text-base md:text-lg leading-relaxed">
            <p>
              I am a passionate software engineer based in a digital ecosystem, specializing in assembling scalable, elegant web structures. My journey began with simple logical scripts, evolving into building enterprise applications that handle massive data pipelines.
            </p>
            <p>
              I bridge the boundary between pure design elegance and robust system performance. Whether it's crafting lightning-fast, reactive client interfaces or modeling secure database schemas, my mission is to deliver digital assets that perform with maximum utility.
            </p>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800/60 mt-4 text-center">
              <div>
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-cyan to-blue-500 bg-clip-text text-transparent">1+</div>
                <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1">Year Experience</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-purple to-pink-500 bg-clip-text text-transparent">30+</div>
                <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mt-1">Projects</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-white">Technological Engine</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'rgba(6, 182, 212, 0.4)',
                    backgroundColor: 'rgba(6, 182, 212, 0.05)'
                  }}
                  className="flex items-center gap-2.5 p-3 rounded-xl glass transition-colors duration-200"
                >
                  <div className="flex-shrink-0">{skill.icon}</div>
                  <span className="text-xs font-semibold text-slate-200 tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
