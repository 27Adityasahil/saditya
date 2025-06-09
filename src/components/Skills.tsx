import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, X } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: {
    name: string;
    level: number;
    color: string;
  }[];
}

const Skills: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      color: 'bg-blue-500',
      skills: [
        { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-500' },
        { name: 'React', level: 75, color: 'from-cyan-400 to-cyan-500' },
        { name: 'Tailwind CSS', level: 70, color: 'from-teal-400 to-teal-500' },
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      color: 'bg-green-500',
      skills: [
        { name: 'Node.js', level: 65, color: 'from-green-500 to-green-600' },
        { name: 'Express', level: 60, color: 'from-gray-500 to-gray-600' },
        { name: 'MongoDB', level: 55, color: 'from-green-600 to-green-700' },
        { name: 'MySQL', level: 60, color: 'from-blue-600 to-blue-700' },
      ]
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: '📝',
      color: 'bg-purple-500',
      skills: [
        { name: 'C', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'C++', level: 70, color: 'from-blue-700 to-indigo-600' },
        { name: 'Java', level: 65, color: 'from-red-600 to-red-700' },
        { name: 'Python', level: 60, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: '🔧',
      color: 'bg-yellow-500',
      skills: [
        { name: 'Git', level: 80, color: 'from-orange-600 to-orange-700' },
        { name: 'VS Code', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'GitHub', level: 75, color: 'from-gray-700 to-gray-800' },
        { name: 'Linux', level: 60, color: 'from-yellow-600 to-yellow-700' },
      ]
    }
  ];

  const handleFolderClick = (folderId: string) => {
    if (activeFolder === folderId) {
      setActiveFolder(null);
    } else {
      setActiveFolder(folderId);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          I've developed a diverse set of skills throughout my academic journey and personal projects.
          Click on a folder to explore my technical expertise in different areas.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.id}
            className="relative"
            variants={item}
          >
            <div 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleFolderClick(category.id)}
            >
              <div className={`w-24 h-20 ${category.color} rounded-t-lg flex items-center justify-center relative overflow-hidden group-hover:brightness-110 transition-all duration-300`}>
                <Folder size={40} className="text-white" />
                <span className="absolute bottom-1 right-1 text-lg">{category.icon}</span>
              </div>
              <div className="w-24 h-4 bg-gray-700 rounded-b-lg group-hover:bg-gray-600 transition-colors duration-300"></div>
              <p className="mt-2 font-medium text-center">{category.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fixed position overlay window with glassmorphism effect */}
      {activeFolder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setActiveFolder(null)}></div>
          <motion.div 
            className="relative w-full max-w-lg bg-gray-800/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            
            <div className={`${skillCategories.find(c => c.id === activeFolder)?.color} px-4 py-3 flex items-center justify-between`}>
              <div className="flex items-center">
                <span className="mr-2 text-lg">{skillCategories.find(c => c.id === activeFolder)?.icon}</span>
                <h3 className="font-bold text-white">{skillCategories.find(c => c.id === activeFolder)?.name} Skills</h3>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFolder(null);
                }}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

           
            <div className="p-6 max-h-[400px] overflow-y-auto">
              <div className="space-y-6">
                {skillCategories.find(c => c.id === activeFolder)?.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{skill.name}</h4>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="bg-gray-900 px-4 py-2 text-xs text-gray-400 flex justify-between">
              <span>{skillCategories.find(c => c.id === activeFolder)?.skills.length} skills</span>
              <span>Click outside to close</span>
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Other Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Git', 'GitHub', 'VS Code', 'Linux', 'MySQL', 'MongoDB', 'Node.js', 'Express'].map((tool, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;