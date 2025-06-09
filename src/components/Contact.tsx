// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       setFormData({ name: '', email: '', subject: '', message: '' });
      
      
//       setTimeout(() => {
//         setSubmitSuccess(false);
//       }, 5000);
//     }, 1500);
//   };

//   return (
//     <div className="container mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="text-center mb-16"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//         <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
//           Feel free to reach out to me for collaboration, opportunities, or just to say hello!
//           I'm always open to discussing new projects and ideas.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
//           <div className="space-y-6 mb-8">
//             <div className="flex items-start">
//               <Mail className="text-blue-400 mr-4 mt-1" size={20} />
//               <div>
//                 <h4 className="font-semibold mb-1">Email</h4>
//                 <p className="text-gray-300">adityasahil2701@gmail.com</p>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <Phone className="text-blue-400 mr-4 mt-1" size={20} />
//               <div>
//                 <h4 className="font-semibold mb-1">Phone</h4>
//                 <p className="text-gray-300">+91 9608119339</p>
//               </div>
//             </div>
            
//             <div className="flex items-start">
//               <MapPin className="text-blue-400 mr-4 mt-1" size={20} />
//               <div>
//                 <h4 className="font-semibold mb-1">Location</h4>
//                 <p className="text-gray-300">Durgapur, West Bengal, India</p>
//               </div>
//             </div>
//           </div>
          
//           <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
//           <div className="flex space-x-4">
//             <a 
//               href="https://github.com/27Adityasahil" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
//             >
//               <Github size={20} />
//             </a>
//             <a 
//               href="https://www.linkedin.com/in/adityar27/" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
//             >
//               <Linkedin size={20} />
//             </a>
//             <a 
//               href="https://x.com/SAditya_27" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
//             >
//               <Twitter size={20} />
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          
//           {submitSuccess ? (
//             <div className="bg-green-900/50 border border-green-500 text-green-300 rounded-lg p-4 mb-6">
//               Thank you for your message! I'll get back to you soon.
//             </div>
//           ) : null}
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 placeholder="Aditya Raj"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 placeholder="adityasahil2701@gmail.com"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//                 placeholder="Project Inquiry"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
//                 placeholder="Your message here..."
//               ></textarea>
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 ${
//                 isSubmitting 
//                   ? 'bg-gray-700 cursor-not-allowed' 
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send size={18} className="mr-2" />
//                   Send Message
//                 </>
//               )}
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out to me for collaboration, opportunities, or just to say hello!
          I'm always open to discussing new projects and ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <Mail className="text-blue-400 mr-4 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-300">adityasahil2701@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="text-blue-400 mr-4 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-300">+91 9608119339</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="text-blue-400 mr-4 mt-1" size={20} />
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-300">Durgapur, West Bengal, India</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/27Adityasahil" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/adityar27/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/SAditya_27" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          {submitSuccess && (
            <div className="bg-green-900/50 border border-green-500 text-green-300 rounded-lg p-4 mb-6">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Aditya Raj"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="adityasahil2701@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 ${
                isSubmitting
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
