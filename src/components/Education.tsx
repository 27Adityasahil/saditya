import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const Education: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Bengal College of Engineering & Technology",
      location: "Durgapur, West Bengal, India",
      year: "2022 - 2026",
      description: "Currently pursuing B.Tech with a focus on software development and programming. Participating in various technical events, hackathons, and maintaining a strong academic record.",
      achievements: ["Technical Club Lead", "Organizing events and bootcamps from the club for fellow students"]
    },
    {
      id: 2,
      degree: "Intermediate (Class XII)",
      field: "Science - PCM",
      institution: "South Point Public School",
      location: "Patna, Bihar, India",
      year: "2020 - 2022",
      description: "Completed intermediate education with a focus on Physics, Chemistry, Mathematics, and Computer Science as my learning hobby. ",
      achievements: ["Scored 67% in board exams"]
    },
    {
      id: 3,
      degree: "Matriculation (Class X)",
      field: "---------",
      institution: "Shivam International School",
      location: "Patna, Bihar, India",
      year: "2020",
      description: "Completed matriculation. Developed interest in computer science and participated in various extracurricular activities.",
      achievements: ["Scored 82% in board exams"]
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev === educationData.length - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? educationData.length - 1 : prev - 1));
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          My academic journey that has shaped my knowledge and skills in the field of technology.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          
          <div className="relative flex justify-center perspective">
            
            <div className="absolute h-[500px] w-8 bg-gradient-to-r from-blue-900 to-blue-800 left-1/2 transform -translate-x-1/2 rounded-l-lg z-0"></div>
            
            
            <motion.div 
              className={`relative w-[300px] sm:w-[350px] md:w-[400px] h-[500px] bg-gray-100 rounded-l-lg shadow-xl transform origin-right ${currentPage === 0 ? 'hidden' : 'block'}`}
              initial={{ rotateY: -10 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gray-800 m-4 rounded-lg p-6 text-white overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="border-b border-gray-700 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-blue-400">Previous Education</h3>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen size={48} className="mx-auto mb-4 text-gray-500" />
                      <p className="text-gray-400">Turn the page to continue reading</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            
            <motion.div 
              className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[500px] bg-white rounded-lg shadow-2xl z-10 transform origin-left"
              initial={{ rotateY: 10 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.5 }}
              key={currentPage}
            >
              <div className="absolute inset-0 bg-gray-800 m-4 rounded-lg p-6 text-white overflow-y-auto">
                <div className="absolute top-2 right-2 text-sm text-gray-500">
                  Page {currentPage + 1} of {educationData.length}
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-xl font-bold">{educationData[currentPage].degree}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-blue-300 font-medium">{educationData[currentPage].field}</p>
                    <p className="text-gray-300 mt-1">{educationData[currentPage].institution}</p>
                    <p className="text-gray-400 text-sm">{educationData[currentPage].location}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-blue-900/50 rounded-full text-sm">
                      {educationData[currentPage].year}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Overview</h4>
                    <p className="text-gray-300">{educationData[currentPage].description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Achievements</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {educationData[currentPage].achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-700 to-transparent rounded-bl-lg pointer-events-none"></div>
            </motion.div>
            
            
            <motion.div 
              className={`relative w-[300px] sm:w-[350px] md:w-[400px] h-[500px] bg-gray-100 rounded-r-lg shadow-xl transform origin-left ${currentPage === educationData.length - 1 ? 'hidden' : 'block'}`}
              initial={{ rotateY: 10 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gray-800 m-4 rounded-lg p-6 text-white overflow-hidden">
                <div className="h-full flex flex-col">
                  <div className="border-b border-gray-700 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-blue-400">Next Education</h3>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen size={48} className="mx-auto mb-4 text-gray-500" />
                      <p className="text-gray-400">Turn the page to continue reading</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevPage}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
            >
              <ChevronLeft size={20} className="mr-1" />
              <span>Previous</span>
            </button>
            
            <button 
              onClick={nextPage}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
            >
              <span>Next</span>
              <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;