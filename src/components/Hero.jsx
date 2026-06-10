import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  // Stagger variants for titles
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const nameLetters = "Marison M".split("");

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background px-6">
      {/* Glow Blobs for ambient backdrop */}
      <div className="glow-blob w-[400px] h-[400px] bg-accent-cyan top-1/4 left-1/4 animate-float-slow" />
      <div className="glow-blob w-[450px] h-[450px] bg-accent-purple bottom-1/4 right-1/4 animate-float-medium" />

      {/* Grid Pattern overlay for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-4xl flex flex-col items-center"
      >
        {/* Intro tag */}
        <motion.div
          variants={itemVariants}
          className="px-4 py-1.5 rounded-full glass text-accent-cyan text-xs font-semibold uppercase tracking-wider mb-6 border border-accent-cyan/20"
        >
          Welcome to my universe
        </motion.div>

        {/* Big Name with letter stagger effect */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 select-none"
        >
          <span className="block text-white">Hi, I'm</span>
          <motion.span 
            className="inline-block bg-gradient-to-r from-accent-cyan via-blue-500 to-accent-purple bg-clip-text text-transparent text-glow-cyan"
            variants={containerVariants}
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block hover:text-accent-cyan hover:scale-125 transition-transform duration-200 cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Subtitle / Role description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-slate-300 max-w-2xl font-light mb-10 leading-relaxed"
        >
          A <span className="text-white font-medium">Full-Stack Software Developer</span> crafting immersive, pixel-perfect web experiences that blend state-of-the-art engineering with fluid interactive design.
        </motion.p>

        {/* Buttons / Actions */}
        <motion.div variants={itemVariants} className="flex gap-4 sm:flex-row flex-col items-center justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-xl font-semibold text-white shadow-neon-cyan hover:shadow-cyan-500/50 transition duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-slate-200 hover:text-white border border-slate-800/80 glass hover:bg-slate-900/50 transition duration-300"
          >
            Let's Talk
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: 'rgba(56, 189, 248, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-accent-cyan hover:text-white border border-accent-cyan/30 glass flex items-center gap-2 transition duration-300 group"
          >
            <FaFileDownload className="text-xl group-hover:-translate-y-1 transition-transform" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-6 mt-8">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5, filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.8))" }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-400 hover:text-accent-cyan transition-colors duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5, filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))" }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-400 hover:text-accent-purple transition-colors duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
        <HiArrowDown className="w-5 h-5 text-accent-cyan" />
      </motion.div>
    </section>
  );
};

export default Hero;
