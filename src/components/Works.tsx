import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Figma, PenTool, Code2 } from 'lucide-react';

// Import your local images
import devWork1 from '../images/dev1.png';
import devWork2 from '../images/ui5.png';
import devWork3 from '../images/ui3.png';

import uiWork1 from '../images/ui3.png';
import uiWork2 from '../images/ui4.png';
import uiWork3 from '../images/ui2.png';
import uiWork4 from '../images/ui5.png';

import graphicWork1 from '../images/design7.png';
import graphicWork2 from '../images/design6.png';
import graphicWork3 from '../images/design5.png';
import graphicWork4 from '../images/design8.png';
import graphicWork5 from '../images/design2.png';



const Works: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const developmentProjects = [
    {
      title: 'Kishani App',
      description: 'Agriculture app that helps farmers to sell their agro products.',
      image: devWork1,
      tags: ['React Native', 'Node.js', 'MongoDB'],
     
      githubLink: '#'
    },
    {
      title: 'Clear Thoughts',
      description: 'Productivity app with drag-and-drop interface',
      image: devWork2,
      tags: ['HTML', 'CSS', 'JS'],
     
      githubLink: '#'
    },
    {
      title: 'Clear Thoughts',
      description: 'Productivity app with drag-and-drop interface',
      image: devWork3,
      tags: ['HTML', 'CSS', 'JS'],

      githubLink: '#'
    }
  ];

  const uiUxProjects = [
    {
      title: 'Krishak App',
      description: 'Designed for farmer for renting machinery equipment and hire workers',
      image: uiWork1,
      tags: ['Figma', 'User Research', 'Prototype'],
      figmaLink: 'https://www.figma.com/design/ScJ4MaDyJyxa3b7AEszq2k/Kishani--App-Design?node-id=2-2&t=Cd6JJpcQvgtzNaWA-1'
    },
    {
      title: 'CollegeDiscover',
      description: 'Website to help the students to find the colleges.',
      image: uiWork2,
      tags: ['Wireframes', 'UI Kit', 'Figma'],
      figmaLink: 'https://www.figma.com/design/lRYgib9AmH260gxTk5xJ2I/CollegeDiscover?node-id=0-1&t=JsMTIB3cVgqHDnFf-1'
    },
    {
      title: 'Mediworld',
      description: 'App for healthcare system.',
      image: uiWork3,
      tags: ['Wireframes', 'UI Kit', 'Figma'],
      figmaLink: 'https://www.figma.com/design/2QvOvbyNYmiyJKKFsI4uT7/Health-Care?node-id=0-1&t=3yNly9hQZMLPLOgr-1'
    },
    {
      title: 'Clear Thought',
      description: 'Website for mental helath people.',
      image: uiWork4,
      tags: ['Wireframes', 'UI Kit', 'Figma'],
      figmaLink: 'https://www.figma.com/design/vcYcBkTurYOwRBvbLVkNBS/Mental-Health?node-id=46-161&t=ryekf3RZBgap3Jsq-1'
    }
  ];

  const graphicDesignProjects = [
    {
      image: graphicWork1,
     
    },
    {
      image: graphicWork2,
   
    },
    {
      image: graphicWork3,
      
    },
    {
      image: graphicWork4,
     
    },
    {
      image: graphicWork5,
     
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            My Portfolio
          </h2>

          {/* Development Projects */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <Code2 className="w-8 h-8 mr-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Development Projects
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {developmentProjects.map((project, index) => (
                <motion.div
                  key={`dev-${index}`}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3 w-full">
                        
                        <a
                          href={project.githubLink}
                          className="flex-1 flex items-center justify-center py-2 bg-orange-600 hover:bg-orange-700 rounded-full text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2" size={16} />
                          View Code
                        </a>
                        
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* UI/UX Design Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <Figma className="w-8 h-8 mr-3 text-orange-600 dark:text-orange-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                UI/UX Design
              </h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {uiUxProjects.map((project, index) => (
                <motion.div
                  key={`ui-${index}`}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                      <h3 className="text-xl font-bold text-white text-center mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-center mb-6">{project.description}</p>
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-full text-white transition-colors"
                      >
                        <Figma className="mr-2" size={18} />
                        Open in Figma
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Graphic Design Section */}
          <div className="mt-24">
            <div className="flex items-center justify-center mb-12">
              <PenTool className="w-8 h-8 mr-3 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Graphic Design
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {graphicDesignProjects.map((project, index) => (
                <motion.div
                  key={`graphic-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={project.image}
                   
                    className="w-full h-64 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-medium"></h3>
                      <p className="text-gray-200 text-sm"></p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;