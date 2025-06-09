import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../assets/profile.jpg'

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-4 mt-16 md:mt-0">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Aditya Raj</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              B.Tech Student
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about creating innovative solutions through code. 
            Currently in my 3rd year of B.Tech, exploring the world of software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent hover:bg-gray-800 text-white font-medium rounded-lg border border-gray-600 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 h-[300px] md:h-[500px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/20">
            <img 
              src={Profile} 
              alt="Aditya Raj" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
          </div>
        </motion.div>
      </div>
      
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
