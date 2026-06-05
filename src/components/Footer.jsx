import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/marsion77' },
    { name: 'LinkedIn', icon: <FaLinkedinIn className="w-5 h-5" />, href: 'https://www.linkedin.com/in/marison-m/' },
    { name: 'Email', icon: <FaEnvelope className="w-5 h-5" />, href: 'mailto:marison399@gmail.com' },
  ];

  return (
    <footer className="w-full bg-[#05060a]/80 border-t border-slate-900 py-12 px-6 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Brand Name */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
            Marison M
          </span>
          <span className="text-xs text-slate-500 mt-1 font-light tracking-wide">
            Full-Stack Software Developer
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              whileHover={{ 
                scale: 1.15,
                y: -3,
                borderColor: 'rgba(6, 182, 212, 0.4)',
                backgroundColor: 'rgba(6, 182, 212, 0.08)',
                color: '#06b6d4'
              }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 border border-slate-800/40 shadow-sm transition-colors duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 text-center md:text-right font-light">
          <p>&copy; {currentYear} Marison M. All rights reserved.</p>
          <p className="mt-1 text-slate-600">Built with React, Tailwind & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
