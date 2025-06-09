import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import profile from "../assets/profile.jpg"

const About: React.FC = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg shadow-xl overflow-hidden">
            <img 
              src={profile} 
              alt="Aditya Raj" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Aditya Raj</h3>
          <p className="text-gray-300 mb-6">
            I'm a passionate B.Tech student in my third year, specializing in Computer Science and Engineering. 
            My journey in technology began with a curiosity about how things work, which evolved into a deep 
            interest in programming and software development.
          </p>
          <p className="text-gray-300 mb-6">
            I enjoy solving complex problems and building applications that make a difference. 
            My academic journey has equipped me with strong fundamentals in various programming 
            languages and technologies, while my personal projects have given me practical experience 
            in applying these skills to real-world scenarios.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center">
              <GraduationCap className="text-blue-400 mr-3" size={24} />
              <div>
                <h4 className="font-semibold">Education</h4>
                <p className="text-sm text-gray-400">B.Tech (2022-2026)</p>
              </div>
            </div>
            <div className="flex items-center">
              <Code className="text-blue-400 mr-3" size={24} />
              <div>
                <h4 className="font-semibold">Coding</h4>
                <p className="text-sm text-gray-400">500+ Hours</p>
              </div>
            </div>
            <div className="flex items-center">
              <Briefcase className="text-blue-400 mr-3" size={24} />
              <div>
                <h4 className="font-semibold">Projects</h4>
                <p className="text-sm text-gray-400">10+ Completed</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
