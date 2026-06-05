import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaChevronLeft, FaChevronRight, FaHtml5, FaCss3Alt, FaJs, FaHome, FaUtensils, FaListAlt, FaCheckSquare, FaImage, FaBirthdayCake } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import hrmsImg from '../assets/hrms_project.png';
import bookingImg from '../assets/booking_project.png';
import itCompanyImg from '../assets/it_company_project.png';
import formCrudImg from '../assets/form_crud_project.png';
import todoImg from '../assets/todo_project.png';
import imageGenImg from '../assets/image_generator_project.png';
import ageCalcImg from '../assets/age_calculator_project.png';
import realEstateImg from '../assets/real_estate_project.png';
import restaurantImg from '../assets/restaurant_project.png';

const projectsData = [
  {
    title: 'HRMS (Human Resource Management)',
    desc: 'An enterprise-grade Human Resource Management platform to manage employee lifecycles, track attendance metrics, automate payroll pipelines, and manage enquiry requests.',
    tags: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ],
    github: 'https://github.com/marsion77/SAP-Website.git',
    githubBackend: 'https://github.com/marsion77/SAP-Backend-Enquiry.git',
    live: 'https://hrms-frontend-one-phi.vercel.app/',
    color: 'from-cyan-500 to-blue-600',
    image: hrmsImg,
  },
  {
    title: 'Event Ticket Booking App',
    desc: 'A real-time event ticketing and booking platform featuring interactive seating grids, category filtering, checkout confirmations, and transactional inquiry management.',
    tags: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ],
    github: 'https://github.com/marsion77/Booking--App-Frontend.git',
    githubBackend: 'https://github.com/marsion77/Booking--App-Backend.git',
    live: 'https://booking-app-frontend-phi.vercel.app',
    color: 'from-purple-500 to-pink-600',
    image: bookingImg,
  },
  {
    title: 'IT Company Website',
    desc: 'A corporate web portal for an IT services and consulting firm, featuring service catalog displays, customer inquiry pipelines, and an administrative message review dashboard.',
    tags: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ],
    github: 'https://github.com/marsion77/SAP-Website.git',
    githubBackend: 'https://github.com/marsion77/SAP-Backend-Enquiry.git',
    live: 'https://sap-website-six.vercel.app/',
    color: 'from-amber-500 to-orange-600',
    image: itCompanyImg,
  },
  {
    title: 'Form Validation CRUD App',
    desc: 'A dynamic form validation and CRUD application with real-time input validation, error feedback, and full create, read, update, and delete operations on a live data table.',
    tags: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    github: 'https://github.com/marsion77/Form-Validation-CRUD-App.git',
    live: 'https://snazzy-cassata-c187d9.netlify.app/',
    color: 'from-blue-500 to-indigo-600',
    image: formCrudImg,
  },
  {
    title: 'Todo Application',
    desc: 'A clean and intuitive todo app to manage daily tasks with add, complete, and delete functionality, persistent task state, and category filtering for productivity.',
    tags: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    github: 'https://github.com/marsion77/Simple-Todo-App.git',
    live: 'https://spontaneous-parfait-fb10f9.netlify.app/',
    color: 'from-emerald-500 to-teal-600',
    image: todoImg,
  },
  {
    title: 'AI Image Generator App',
    desc: 'A web application that generates AI-powered images from text prompts using a public API, displaying results in a responsive gallery with download support.',
    tags: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    github: 'https://github.com/marsion77/Image-Generator-App.git',
    live: 'https://rococo-moonbeam-27164f.netlify.app/',
    color: 'from-violet-500 to-purple-600',
    image: imageGenImg,
  },
  {
    title: 'Age Calculator',
    desc: 'A precise age calculator that computes exact age in years, months, and days from a given date of birth, with clean UI and instant results.',
    tags: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    github: 'https://github.com/marsion77/Age-Calculator-Javascript.git',
    live: 'https://enchanting-shortbread-d6f555.netlify.app/',
    color: 'from-pink-500 to-rose-600',
    image: ageCalcImg,
  },
  {
    title: 'Real Estate Website',
    desc: 'A fully responsive static real estate website with property listings, search and filter functionality, media queries for mobile support, and a premium property showcase layout.',
    tags: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    github: 'https://github.com/marsion77/RealEstate-MediaQuery.git',
    live: 'https://frolicking-lollipop-67b9c3.netlify.app/',
    color: 'from-emerald-500 to-green-600',
    image: realEstateImg,
  },
  {
    title: 'Restaurant Clone Website',
    desc: 'A mobile-first restaurant clone website featuring a hero section, featured dishes menu grid, and smooth responsive layout built to replicate a real-world restaurant brand experience.',
    tags: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    github: 'https://github.com/marsion77/Restaurant-Clone-Mobile.git',
    live: 'https://splendid-pothos-b093ee.netlify.app/',
    color: 'from-red-500 to-orange-600',
    image: restaurantImg,
  },
];

const Projects = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden relative">
      {/* Background blur blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-blue-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl w-full mx-auto px-6 mb-12">
        <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">Selected Works</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Digital Architecture Showcase
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-light max-w-sm">
            Use the navigation arrows or swipe to explore custom systems. Click buttons to visit deployments.
          </p>
        </div>
        <div className="h-[2px] w-20 bg-gradient-to-r from-accent-purple to-accent-cyan mt-4" />
      </div>

      {/* Slider Wrapper */}
      <div className="px-2 sm:px-6 w-full relative flex items-center justify-center">
        {/* Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll('left')}
          className="absolute left-1.5 sm:left-4 md:left-6 z-30 p-2.5 sm:p-4 rounded-full glass border border-slate-800 text-slate-300 shadow-xl hover:text-accent-cyan cursor-pointer flex items-center justify-center transition-all duration-200"
          aria-label="Scroll Left"
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll('right')}
          className="absolute right-1.5 sm:right-4 md:right-6 z-30 p-2.5 sm:p-4 rounded-full glass border border-slate-800 text-slate-300 shadow-xl hover:text-accent-cyan cursor-pointer flex items-center justify-center transition-all duration-200"
          aria-label="Scroll Right"
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        {/* Carousel Container */}
        <motion.div 
          ref={carouselRef} 
          className="overflow-x-auto no-scrollbar scroll-smooth flex gap-6 sm:gap-8 py-6 max-w-6xl mx-auto w-full px-10 sm:px-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] sm:min-w-[360px] md:min-w-[400px] max-w-[400px] rounded-3xl p-5 sm:p-6 glass-card flex flex-col justify-between h-[520px] relative overflow-hidden group"
            >
              <div>
                {/* Project Image Cover Header */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient fade at bottom so card content blends in */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#070913]/80 via-transparent to-transparent`} />
                  {/* Colorful accent glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-400`} />
                </div>

                {/* Project Title and Numbers */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Project 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-200 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300/95 font-light text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full glass text-[10px] font-medium text-slate-300"
                    >
                      <span className="text-accent-cyan text-xs">{tag.icon}</span>
                      <span>{tag.name}</span>
                    </div>
                  ))}
                </div>

                {/* Actions / Links: GitHub and Colorful Live Link Button */}
                <div className="border-t border-slate-800/60 pt-4 flex items-center justify-between gap-3">
                  {/* GitHub Code Links */}
                  <div className="flex gap-2.5 items-center">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, y: -1 }}
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 text-[10px]"
                      title={project.githubBackend ? "Frontend Codebase" : "GitHub Repository"}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="w-5 h-5" />
                      {project.githubBackend && <span className="font-bold bg-slate-800/80 px-1 py-0.5 rounded text-[8px] text-slate-300">UI</span>}
                    </motion.a>

                    {project.githubBackend && (
                      <motion.a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.15, y: -1 }}
                        className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 text-[10px]"
                        title="Backend Codebase"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-5 h-5" />
                        <span className="font-bold bg-slate-800/80 px-1 py-0.5 rounded text-[8px] text-slate-300">API</span>
                      </motion.a>
                    )}
                  </div>

                  {/* Colorful Live Link Button */}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:shadow-lg transition duration-200`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
