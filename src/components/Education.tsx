import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
   
    {
      year: '2022 - 2026',
      degree: 'Bachelor of Computer Science(Hons)',
      institution: 'IIMS College',
      description: 'Focus on Software Engineering and Data Structures',
      icon: <BookOpen size={24} />,
    },
    {
      year: '2020 - 2022',
      degree: '+2 in Computer Science',
      institution: 'Nepalaya Hss College',
      description: 'Foundation in Web Technologies and Programming',
      icon: <BookOpen size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary" />

            {/* Education items */}
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex md:items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right md:pr-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-2 text-primary">
                      {item.icon}
                      <h3 className="font-bold text-lg">{item.degree}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{item.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                </div>

                <div className="flex items-center justify-center w-8 h-8 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>

                <div className="flex-1 md:pl-8">
                  <div className="text-primary font-semibold">{item.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;